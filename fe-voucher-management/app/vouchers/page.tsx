// app/vouchers/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getVouchers, createVoucher, deleteVoucher, updateVoucher, searchVoucher, VoucherPayload } from '@/services/api';

interface Voucher extends VoucherPayload {
    id: number;
    status: string;
}

export default function VouchersPage() {
    const [vouchers, setVouchers] = useState<Voucher[]>([]);
    const [searchCode, setSearchCode] = useState<string>('');

    const [editingId, setEditingId] = useState<number | null>(null);
    const [code, setCode] = useState<string>('');
    const [discountPercent, setDiscountPercent] = useState<string>('');
    const [quantity, setQuantity] = useState<string>('');
    const [expiredDate, setExpiredDate] = useState<string>('');

    const fetchVouchers = async () => {
        const res = await getVouchers();
        if (res.success) setVouchers(res.data);
    };

    useEffect(() => { fetchVouchers(); }, []);

    const handleSearch = async () => {
        if (!searchCode.trim()) return fetchVouchers();
        const res = await searchVoucher(searchCode.toUpperCase());
        if (res.success && res.data) {
            setVouchers(Array.isArray(res.data) ? res.data : [res.data]);
        } else {
            setVouchers([]);
        }
    };

    const handleEditClick = (v: Voucher) => {
        setEditingId(v.id);
        setCode(v.code);
        setDiscountPercent(String(v.discountPercent || v.discount_percent || ''));
        setQuantity(String(v.quantity));
        const dateStr = v.expiredDate || v.expired_date;
        setExpiredDate(dateStr ? dateStr.substring(0, 10) : '');
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload: VoucherPayload = {
            code, discountPercent: Number(discountPercent), quantity: Number(quantity), expiredDate
        };

        const res = editingId ? await updateVoucher(editingId, payload) : await createVoucher(payload);

        if (res.success) {
            fetchVouchers();
            setEditingId(null);
            setCode(''); setDiscountPercent(''); setQuantity(''); setExpiredDate('');
        } else {
            alert(`Lỗi: ${res.message}`);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <h2 className="text-2xl font-bold text-gray-800">Quản lý Voucher</h2>
                <div className="flex gap-2">
                    <input
                        placeholder="Nhập mã code..."
                        value={searchCode}
                        onChange={e => setSearchCode(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button onClick={handleSearch} className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-medium transition-colors">Tìm</button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">{editingId ? 'Chỉnh sửa Voucher' : 'Thêm Voucher mới'}</h3>
                <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Mã Code</label>
                        <input required value={code} onChange={e => setCode(e.target.value.toUpperCase())} disabled={!!editingId} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">% Giảm</label>
                        <input type="number" required value={discountPercent} onChange={e => setDiscountPercent(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Số lượng</label>
                        <input type="number" required value={quantity} onChange={e => setQuantity(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Ngày hết hạn</label>
                        <input type="date" required value={expiredDate} onChange={e => setExpiredDate(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors h-[42px]">
                        {editingId ? 'Cập nhật' : 'Thêm mới'}
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">ID</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Code</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Giảm</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Số lượng</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Hết hạn</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Trạng thái</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm text-right">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {vouchers.map(v => (
                        <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-gray-700 text-sm">{v.id}</td>
                            <td className="px-6 py-4 text-gray-900 font-bold text-sm">{v.code}</td>
                            <td className="px-6 py-4 text-blue-600 font-semibold text-sm">{v.discountPercent || v.discount_percent}%</td>
                            <td className="px-6 py-4 text-gray-700 text-sm">{v.quantity}</td>
                            <td className="px-6 py-4 text-gray-700 text-sm">{v.expiredDate || v.expired_date}</td>
                            <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${v.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {v.status}
                  </span>
                            </td>
                            <td className="px-6 py-4 text-right space-x-2">
                                <button onClick={() => handleEditClick(v)} className="bg-amber-100 text-amber-700 hover:bg-amber-200 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">Sửa</button>
                                <button onClick={() => { if(confirm('Xóa voucher này?')) deleteVoucher(v.id).then(fetchVouchers); }} className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">Xóa</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}