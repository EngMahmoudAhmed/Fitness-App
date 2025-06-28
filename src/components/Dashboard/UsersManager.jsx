import React, { useEffect, useState } from 'react';
import axios from "../../axios";
import { Trash2 } from 'lucide-react';

const UsersManager = () => {
    const [users, setUsers] = useState([]);

    const currentUser = JSON.parse(localStorage.getItem("auth_user"));

    const fetchUsers = async () => {
        try {
            const res = await axios.get('/users');
            setUsers(res.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/users/${id}`);
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const updateRole = async (id, newRole) => {
        try {
            const res = await axios.patch(`/users/${id}/role`, { role: newRole });
            setUsers((prev) =>
                prev.map((user) =>
                    user.id === id ? { ...user, role: res.data.role } : user
                )
            );
        } catch (err) {
            console.error('Error updating role:', err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const canChangeRole = (user) => {
        return currentUser && currentUser.id !== user.id;
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">إدارة المستخدمين</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left">
                            <th className="px-6 py-3 text-sm font-medium">الاسم</th>
                            <th className="px-6 py-3 text-sm font-medium">البريد</th>
                            <th className="px-6 py-3 text-sm font-medium">الدور</th>
                            <th className="px-6 py-3 text-sm font-medium">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-700 capitalize">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="text-red-600 hover:text-red-800 flex items-center gap-1 mb-1"
                                    >
                                        <Trash2 className="w-4 h-4" /> حذف
                                    </button>

                                    <br />

                                    {canChangeRole(user) && (
                                        <button
                                            onClick={() =>
                                                updateRole(user.id, user.role === 'admin' ? 'user' : 'admin')
                                            }
                                            className="text-blue-600 hover:text-blue-800 text-sm underline"
                                        >
                                            {user.role === 'admin'
                                                ? 'إزالة صلاحية الأدمن'
                                                : 'ترقية إلى أدمن'}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center px-6 py-4 text-gray-500 text-sm"
                                >
                                    لا يوجد مستخدمين حاليًا.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManager;
