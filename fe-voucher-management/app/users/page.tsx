// app/users/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getUsers, createUser, UserPayload } from '@/services/api';

interface User extends UserPayload {
    id: number;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const fetchUsers = async () => {
        const res = await getUsers();
        if (res.success) setUsers(res.data);
    };

    useEffect(() => { fetchUsers(); }, []);

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await createUser({ fullName, email, phone });
        if (res.success) {
            fetchUsers();
            setFullName(''); setEmail(''); setPhone('');
        } else {
            alert(res.message || 'Có lỗi xảy ra');
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Quản lý Khách hàng</h2>

            {/* Form Thêm User Mới */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Thêm Khách hàng mới</h3>
                <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Họ tên</label>
                        <input required value={fullName} onChange={e => setFullName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Số điện thoại</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors h-[42px]">Thêm User</button>
                </form>
            </div>

            {/* Bảng Danh sách User */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">ID</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Họ tên</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Email</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">SĐT</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {users.map(u => (
                        <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-gray-700 text-sm">{u.id}</td>
                            <td className="px-6 py-4 text-gray-900 font-medium text-sm">{u.fullName || u.full_name}</td>
                            <td className="px-6 py-4 text-gray-600 text-sm">{u.email}</td>
                            <td className="px-6 py-4 text-gray-600 text-sm">{u.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}