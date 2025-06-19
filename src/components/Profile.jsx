import { useState } from 'react'
import { Camera, Mail, MapPin, Phone, Edit2, Check, X } from 'lucide-react'

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false)
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 234 567 890',
        location: 'New York, USA',
        bio: 'Fitness enthusiast and health coach with 5+ years of experience.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    })

    const [editForm, setEditForm] = useState(profile)

    const handleEdit = () => {
        setIsEditing(true)
        setEditForm(profile)
    }

    const handleSave = () => {
        setProfile(editForm)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
        setEditForm(profile)
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                {/* Profile Header */}
                <div className="relative h-48 bg-gradient-to-r from-teal-500 to-teal-600">
                    <div className="absolute -bottom-12 left-8">
                        <div className="relative">
                            <img
                                className="h-32 w-32 rounded-full border-4 border-gray-800 object-cover"
                                src={profile.avatar}
                                alt={profile.name}
                            />
                            <button className="absolute bottom-0 right-0 p-1 rounded-full bg-gray-800 text-teal-500 hover:text-teal-400 transition-colors">
                                <Camera size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="pt-16 pb-8 px-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            {isEditing ? (
                                <input
                                    type="text"
                                    className="bg-gray-700 text-white text-2xl font-bold rounded px-3 py-1"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                />
                            ) : (
                                <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleSave}
                                        className="flex items-center px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
                                    >
                                        <Check size={16} className="mr-1" />
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="flex items-center px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                                    >
                                        <X size={16} className="mr-1" />
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={handleEdit}
                                    className="flex items-center px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                                >
                                    <Edit2 size={16} className="mr-1" />
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-6">
                        {isEditing ? (
                            <textarea
                                className="w-full bg-gray-700 text-white rounded px-3 py-2"
                                rows="3"
                                value={editForm.bio}
                                onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                            />
                        ) : (
                            <p className="text-gray-300">{profile.bio}</p>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center text-gray-300">
                            <Mail className="h-5 w-5 text-teal-500 mr-2" />
                            {isEditing ? (
                                <input
                                    type="email"
                                    className="bg-gray-700 text-white rounded px-3 py-1"
                                    value={editForm.email}
                                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                />
                            ) : (
                                <span>{profile.email}</span>
                            )}
                        </div>
                        <div className="flex items-center text-gray-300">
                            <Phone className="h-5 w-5 text-teal-500 mr-2" />
                            {isEditing ? (
                                <input
                                    type="tel"
                                    className="bg-gray-700 text-white rounded px-3 py-1"
                                    value={editForm.phone}
                                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                />
                            ) : (
                                <span>{profile.phone}</span>
                            )}
                        </div>
                        <div className="flex items-center text-gray-300">
                            <MapPin className="h-5 w-5 text-teal-500 mr-2" />
                            {isEditing ? (
                                <input
                                    type="text"
                                    className="bg-gray-700 text-white rounded px-3 py-1"
                                    value={editForm.location}
                                    onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                                />
                            ) : (
                                <span>{profile.location}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}