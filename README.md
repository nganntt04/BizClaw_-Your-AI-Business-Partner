# BizClaw - Your AI Business Partner

Website giới thiệu nền tảng BizClaw của 405CYSE, kèm form đăng ký tư vấn: khi khách hàng điền form, thông tin được lưu vào database và gửi thông báo qua email nội bộ để nhân viên liên hệ lại.

## Công nghệ sử dụng

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7) — full-stack, có server function chạy trên Node
- **UI:** Tailwind CSS v4, shadcn/ui (Radix UI)
- **Form & validate:** react-hook-form + zod
- **Database:** PostgreSQL, quản lý qua Prisma ORM (v7)
- **Gửi email:** nodemailer (SMTP)

## Yêu cầu môi trường

- Node.js 20+
- Một database PostgreSQL (local qua Docker, hoặc server có sẵn)
- Trình quản lý gói: pnpm

## Cài đặt lần đầu

### 1. Clone repo & cài dependencies

```bash
git clone https://github.com/nganntt04/BizClaw_-Your-AI-Business-Partner.git
cd BizClaw_-Your-AI-Business-Partner
pnpm install
```

### 2. Chạy PostgreSQL local

Cách nhanh nhất là dùng Docker (đổi cổng `5434` nếu máy bạn đang bận port khác):

```bash
docker run --name bizclaw-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=bizclaw -p 5434:5432 -d postgres:16
```

> **Windows PowerShell:** không dùng dấu `\` để xuống dòng như Bash — viết lệnh trên 1 dòng như trên, hoặc dùng dấu `` ` `` (backtick) nếu muốn tách dòng.

Kiểm tra container đang chạy: `docker ps` (phải thấy `bizclaw-db` ở trạng thái `Up`).

### 3. Tạo file `.env`

Tạo file `.env` ở thư mục gốc project (file này **không** commit lên Git):

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5434/bizclaw?schema=public"

SMTP_USER="nganntt@405cyse.com"
SMTP_PASS="app-password-16-ky-tu"
CONTACT_NOTIFY_EMAIL="info@405cyse.com"
```

- `SMTP_USER`/`SMTP_PASS`: Ngân gửi riêng
- `CONTACT_NOTIFY_EMAIL`: địa chỉ mail nhận thông báo khi có khách đăng ký (mặc định trong code là `info@405cyse.com.vn` nếu bỏ trống biến này — kiểm tra lại `src/lib/mailer.ts` cho đúng domain thật).

### 4. Tạo bảng trong database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Lệnh này tạo bảng `ContactSubmission` theo schema ở `prisma/schema.prisma`.

### 5. Chạy dự án

```bash
pnpm run dev
```

Mở `http://localhost:8080` để xem trang web.

## Cấu trúc thư mục liên quan tới backend/database

```
prisma/
  schema.prisma          # định nghĩa bảng ContactSubmission
  migrations/             # lịch sử thay đổi schema — commit lên Git bình thường
prisma.config.ts          # cấu hình Prisma 7, đọc DATABASE_URL từ .env
src/
  lib/
    prisma.ts             # khởi tạo Prisma Client (dùng driver adapter @prisma/adapter-pg)
    mailer.ts             # gửi email thông báo qua nodemailer/SMTP
    contact.server.ts     # server function nhận dữ liệu form, lưu DB + gọi gửi mail
  routes/
    index.tsx             # trang chủ, chứa form đăng ký tư vấn (component ConsultSection)
```

## Kiểm tra dữ liệu đã lưu

```bash
docker exec -it bizclaw-db psql -U postgres -d bizclaw
```

Sau khi vào được dấu nhắc `bizclaw=#`:

```sql
SELECT * FROM "ContactSubmission";
```

Gõ `\q` để thoát.

## Các lệnh thường dùng

| Lệnh | Mục đích |
|---|---|
| `pnpm run dev` | Chạy dev server |
| `pnpm run build` | Build production (output ở `.output/`) |
| `pnpm run lint` | Kiểm tra lỗi code style |
| `npx prisma studio` | Mở giao diện xem/sửa dữ liệu database trực quan |
| `npx prisma migrate dev --name <tên>` | Tạo migration mới khi đổi `schema.prisma` (local) |
| `npx prisma migrate deploy` | Áp migration lên production (không dùng `dev` ở production) |

## Lỗi thường gặp khi setup lần đầu

**`Could not resolve ".prisma/client/index-browser"`**
→ Chưa chạy `npx prisma generate`, hoặc Prisma Client chưa được import đúng cách (dự án này dùng dynamic import trong `contact.server.ts` để tránh Vite bundle nhầm Prisma vào code chạy trình duyệt — không sửa lại thành `import` tĩnh ở đầu file).

**`The datasource property 'url' is no longer supported in schema files'` (P1012)**
→ Dự án dùng Prisma 7 — connection URL đọc từ `prisma.config.ts` (đã cấu hình sẵn), không khai báo `url` trong `prisma/schema.prisma`.

**VS Code vẫn gạch đỏ `import { PrismaClient }` dù đã generate xong**
→ `Ctrl+Shift+P` → **"TypeScript: Restart TS Server"**.

**Form submit được nhưng không có mail**
→ Xem log ở terminal chạy `npm run dev`, tìm dòng `Gửi email thông báo thất bại: ...` — lỗi phổ biến nhất là `SMTP_USER`/`SMTP_PASS` sai hoặc chưa dùng App Password. Dữ liệu vẫn được lưu vào DB dù gửi mail thất bại (xem `contact.server.ts`).