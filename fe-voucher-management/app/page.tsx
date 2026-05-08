// app/page.tsx
export default function HomePage() {
    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h1>Chào mừng đến với Hệ thống Quản lý Voucher</h1>
            <p style={{ fontSize: '18px', color: '#555' }}>
                Vui lòng sử dụng Menu điều hướng phía trên để quản lý Danh sách Voucher, Khách hàng và Cấp phát.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <a href="/vouchers" style={{ padding: '15px 30px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Quản lý Voucher</a>
                <a href="/users" style={{ padding: '15px 30px', backgroundColor: '#2ecc71', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Quản lý User</a>
                <a href="/usages" style={{ padding: '15px 30px', backgroundColor: '#e67e22', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Lịch sử & Cấp phát</a>
            </div>
        </div>
    );
}