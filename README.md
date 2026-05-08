

---

```markdown
# 🎟️ Voucher Management System (Mini Management System)

Dự án này là một hệ thống Backend siêu nhỏ (Mini Backend) nhằm giải quyết bài toán quản lý mã giảm giá (Voucher) cho khách hàng. Hệ thống tập trung vào việc quản lý dữ liệu tập trung, xử lý các ràng buộc logic nghiệp vụ phức tạp và cung cấp API chuẩn RESTful cho các ứng dụng Frontend.

---

## 🛠️ Công nghệ sử dụng

Hệ thống được phát triển dựa trên các công nghệ hiện đại, đảm bảo tính hiệu suất và bảo mật:

- [cite_start]**Ngôn ngữ:** Java 21 [cite: 131, 132]
- [cite_start]**Framework:** Spring Boot 3.x (Spring Data JPA, Spring Web, Validation) [cite: 132, 134]
- [cite_start]**Cơ sở dữ liệu:** MySQL 5.7 / 8.0 [cite: 8, 136]
- **Công cụ hỗ trợ:**
  - [cite_start]**Lombok:** Giảm bớt mã thừa (Getter, Setter, Builder)[cite: 135].
  - **Hibernate:** Tự động quản lý ánh xạ thực thể (ORM).
  - **Maven:** Quản lý cấu trúc dự án và các thư viện phụ thuộc.

```

---

## ⚙️ Hướng dẫn cài đặt và Chạy dự án

### 1. Chuẩn bị Cơ sở dữ liệu

* Mở **WampServer** (hoặc MySQL Server) và tạo database có tên: `voucher_management`.
* Sử dụng công cụ (như MySQL Workbench hoặc Navicat) để chạy file script `voucher_management.sql` đi kèm để tạo bảng và dữ liệu mẫu.



### 2. Cấu hình kết nối

Chỉnh sửa thông tin tại file `src/main/resources/application.properties`:

```properties
server.port=8080

# Cấu hình kết nối MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/voucher_management?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_password

```

### 3. Chạy dự án

Mở dự án bằng **IntelliJ IDEA** và chạy class `VoucherManagementApplication`. Ứng dụng sẽ khả dụng tại địa chỉ: `http://localhost:8080`.

---

## 📡 Danh sách API chính

Dưới đây là các API chính đã được triển khai (Response trả về dạng JSON):

1. Quản lý Voucher 

| Method | Endpoint | Mô tả |
| --- | --- | --- |
| **GET** | `/vouchers` | Lấy danh sách tất cả Voucher 

 |
| **POST** | `/vouchers` | Thêm Voucher mới (Validate: Code duy nhất, hạn dùng tương lai) 

 |
| **PUT** | `/vouchers/{id}` | Cập nhật thông tin Voucher 

 |
| **DELETE** | `/vouchers/{id}` | Xóa Voucher 

 |
| **GET** | `/vouchers/search?code=ABC` | Tìm kiếm Voucher theo mã code 

 |

2. Quản lý Người dùng 

`GET /users`: Danh sách người dùng hệ thống.


`POST /users`: Tạo mới người dùng (Validate: Email đúng định dạng, không trùng lặp).

3. Sử dụng Voucher 

`POST /voucher-usages`: Cho phép User sử dụng Voucher.

**Logic:** Tự động trừ số lượng (`quantity`) voucher đi 1 và lưu lịch sử sử dụng.

**Validate:** Ngăn chặn sử dụng nếu voucher hết hạn, trạng thái `INACTIVE` hoặc số lượng đã hết (`quantity = 0`).

`GET /voucher-usages`: Xem lại toàn bộ lịch sử sử dụng.



---

## 💡 Tính năng nổi bật

1. **Xử lý Exception tập trung:** Mọi lỗi logic hoặc lỗi hệ thống đều được bắt và trả về định dạng JSON thống nhất (Success: false).


2. **Validate Dữ liệu khắt khe:** Sử dụng Bean Validation để kiểm tra dữ liệu ngay từ tầng API (discount từ 1-100%, số lượng không âm,...).


3. **Tính nhất quán dữ liệu:** Sử dụng `@Transactional` để đảm bảo việc trừ số lượng voucher và lưu lịch sử diễn ra đồng thời, nếu một bước lỗi sẽ rollback toàn bộ.
4. **Cấu hình CORS:** Dự án đã sẵn sàng để kết nối với các ứng dụng Frontend (Next.js/ReactJS).

---

**Candidate:** Intern Developer


**Thời gian thực hiện bài test:** 3 giờ 

```

```
