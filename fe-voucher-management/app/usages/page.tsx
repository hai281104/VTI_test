// app/usages/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getUsages, useVoucher, getUsers, getVouchers, UsagePayload } from '@/services/api';

interface VoucherUsage {
    id: number;
    userId: number; user_id?: number;
    voucherId: number; voucher_id?: number;
    usedAt: string; used_at?: string;
}

export default function UsagesPage() {
    const [usages, setUsages] = useState<VoucherUsage[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [users, setUsers] = useState<any[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [vouchers, setVouchers] = useState<any[]>([]);

    const [selectedUser, setSelectedUser] = useState<string>('');
    const [selectedVoucher, setSelectedVoucher] = useState<string>('');

    const loadData = async () => {
        const [usageRes, userRes, voucherRes] = await Promise.all([getUsages(), getUsers(), getVouchers()]);
        if (usageRes.success) setUsages(usageRes.data);
        if (userRes.success) setUsers(userRes.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (voucherRes.success) setVouchers(voucherRes.data.filter((v: any) => v.status === 'ACTIVE' && v.quantity > 0));
    };

    useEffect(() => { loadData(); }, []);

    const handleApply = async () => {
        if (!selectedUser || !selectedVoucher) return alert('Vui lòng chọn đủ thông tin!');
        const payload: UsagePayload = { userId: Number(selectedUser), voucherId: Number(selectedVoucher) };
        const res = await useVoucher(payload);
        if (res.success) {
            alert('Sử dụng voucher thành công!');
            loadData();
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Cấp phát Voucher</h2>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Khách hàng</label>
                    <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 bg-white">
                        <option value="">-- Chọn khách hàng --</option>
                        {users.map(u => <option key={u.id} value={u.id}>{u.fullName || u.full_name} ({u.email})</option>)}
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Voucher (Khả dụng)</label>
                    <select value={selectedVoucher} onChange={e => setSelectedVoucher(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 bg-white">
                        <option value="">-- Chọn voucher --</option>
                        {vouchers.map(v => <option key={v.id} value={v.id}>{v.code} (Còn: {v.quantity})</option>)}
                    </select>
                </div>
                <button onClick={handleApply} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors h-[42px]">Xác nhận cấp phát</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-8">
                <h3 className="px-6 py-4 font-bold text-gray-800 border-b border-gray-100">Lịch sử sử dụng</h3>
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">ID Lịch sử</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">User ID</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Voucher ID</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Thời gian sử dụng</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {usages.map(u => (
                        <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-gray-700 text-sm font-medium">#{u.id}</td>
                            <td className="px-6 py-4 text-blue-600 font-semibold text-sm">User {u.userId || u.user_id}</td>
                            <td className="px-6 py-4 text-amber-600 font-semibold text-sm">Voucher {u.voucherId || u.voucher_id}</td>
                            <td className="px-6 py-4 text-gray-500 text-sm">{new Date(u.usedAt || u.used_at || '').toLocaleString('vi-VN')}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}