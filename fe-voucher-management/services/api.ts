const API_URL = process.env.NEXT_PUBLIC_API_URL;



export interface VoucherPayload {
    code: string;

    discountPercent?: number;
    discount_percent?: number;
    quantity: number;
    expiredDate?: string;
    expired_date?: string;
}

export interface UserPayload {
    fullName?: string;
    full_name?: string;
    email: string;
    phone?: string;
}

export interface UsagePayload {
    userId?: number;
    user_id?: number;
    voucherId?: number;
    voucher_id?: number;
}



// 2. VOUCHER APIs


export const getVouchers = async () => (await fetch(`${API_URL}/vouchers`)).json();

export const createVoucher = async (data: VoucherPayload) => {
    const res = await fetch(`${API_URL}/vouchers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
};

export const deleteVoucher = async (id: number) => {
    const res = await fetch(`${API_URL}/vouchers/${id}`, { method: 'DELETE' });
    return res.json();
};


export const updateVoucher = async (id: number, data: VoucherPayload) => {
    const res = await fetch(`${API_URL}/vouchers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
};

export const searchVoucher = async (code: string) => {
    const res = await fetch(`${API_URL}/vouchers/search?code=${code}`);
    return res.json();
};



// 3. USER APIs


export const getUsers = async () => (await fetch(`${API_URL}/users`)).json();


export const createUser = async (data: UserPayload) => {
    const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
};



// 4. VOUCHER USAGE APIs


export const getUsages = async () => (await fetch(`${API_URL}/voucher-usages`)).json();


export const useVoucher = async (data: UsagePayload) => {
    const res = await fetch(`${API_URL}/voucher-usages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
};