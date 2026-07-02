import logo405 from "@/assets/405cyse-logo.png";
import fridge1 from "@/assets/fridge-1.png";
import fridge2 from "@/assets/fridge-2.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/contact.server";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  BookOpen,
  Bot,
  Brain,
  Check,
  Cpu,
  Database,
  Eye,
  FileText,
  GraduationCap,
  Headphones,
  Layers,
  Lock,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Network,
  PackageCheck,
  Phone,
  Plug,
  Rocket,
  ScrollText,
  Search,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  User,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BizClaw — AI dành riêng cho doanh nghiệp đột phá" },
      { name: "description", content: "BizClaw: mô hình AI độc quyền với bộ nhớ dài hạn, hội đồng AI đa tác vụ và bảo mật chuẩn Nghị định 356." },
      { property: "og:title", content: "BizClaw — AI dành riêng cho doanh nghiệp đột phá" },
      { property: "og:description", content: "Quên đi AI công cộng hay quên, ngốn token. BizClaw chuyển hóa kho dữ liệu thành vận hành thực tế." },
    ],
  }),
  component: Index,
});

function Index() {
  const LIGHT = "oklch(0.97 0.012 250)";
  const DARK_1 = "oklch(0.10 0.05 258)"; // capabilities & footer
  const DARK_2 = "oklch(0.13 0.05 258)"; // compliance
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <StraightDivider />
      <Capabilities />
      <StraightDivider />
      <Platform />
      <StraightDivider />
      <Compliance />
      <StraightDivider />
      <Deployment />
      <StraightDivider />
      <ConsultSection />
      <StraightDivider />
      <Footer />
    </div>
  );
}

function StraightDivider() {
  return (
    <div className="relative h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.45 0.18 258 / 0.3) 20%, oklch(0.65 0.16 225 / 0.3) 50%, oklch(0.45 0.18 258 / 0.3) 80%, transparent 100%)" }} />
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/70 shadow-[0_1px_0_0_oklch(0.45_0.18_258/0.05)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-[68px] flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logo405} alt="405CYSE" className="h-9 w-9 object-contain transition-transform group-hover:scale-105" />
          <span className="font-display text-2xl text-foreground tracking-tight">BizClaw</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {[
            { href: "#platform", label: "Nền tảng" },
            { href: "#capabilities", label: "Năng lực" },
            { href: "#compliance", label: "Bảo mật" },
            { href: "#deployment", label: "Triển khai" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 font-semibold text-foreground/80 hover:text-foreground transition-colors group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-3 -bottom-px h-[2px] bg-[image:var(--gradient-primary)] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="#consult" className="relative rounded-lg bg-[image:var(--gradient-primary)] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[0_10px_30px_-5px_oklch(0.45_0.2_258/0.6)] hover:-translate-y-0.5 transition-all whitespace-nowrap flex items-center gap-1.5">
            Yêu cầu demo
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-tech-light bg-circuit overflow-hidden">
      <div className="tech-orb h-[420px] w-[420px] -top-32 -right-16" style={{ background: "oklch(0.55 0.2 258 / 0.45)" }} />
      <div className="tech-orb h-[360px] w-[360px] -bottom-24 -left-16" style={{ background: "oklch(0.65 0.16 225 / 0.4)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-32 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
            BizClaw - AI agent dành riêng cho doanh nghiệp tăng trưởng bứt phá
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sở hữu trí nhớ tuyệt vời và tích hợp vào đa nền tảng giúp giải quyết các vấn đề vận hành thực tế doanh nghiệp gặp phải.
          </p>
          <ul className="mt-4 space-y-2 text-sm sm:text-base text-foreground/80">
            {[
              "AI Cloud quên cuộc hội thoại",
              "GoClaw đốt phí token hơn thuê nhân sự",
              "Khó kiểm soát tính chính xác của AI",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#consult"
            className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Nhận tư vấn giải pháp cho doanh nghiệp
          </a>
        </div>
        <HeroChat />
      </div>
    </section>
  );
}

/* --------------------------------------------------------- */
/* HERO: Live AI chat selling washing machines                */
/* --------------------------------------------------------- */
type Msg = { from: "user" | "ai"; text: string; product?: boolean };

const HERO_SCRIPT: Msg[] = [
  { from: "user", text: "Chào shop, mình cần mua tủ lạnh cho gia đình 4 người ạ?" },
  { from: "ai", text: "Chào anh Minh 👋 Em là trợ lý BizAI. Em vừa kiểm tra — lần trước anh có hỏi về tủ lạnh side-by-side. Lần này anh muốn loại 4 cánh hay mini cho phòng riêng ạ?" },
  { from: "user", text: "Cho mình xem cả 2 loại với ngân sách 12 triệu." },
  { from: "ai", text: "Với 4 người và ngân sách 12 triệu, em gợi ý 2 mẫu phù hợp nhất:", product: true },
];

function HeroChat() {
  const [count, setCount] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (count >= HERO_SCRIPT.length) {
      const reset = setTimeout(() => setCount(1), 5000);
      return () => clearTimeout(reset);
    }
    setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setCount((c) => c + 1);
    }, 2200);
    return () => clearTimeout(t);
  }, [count]);

  const visible = HERO_SCRIPT.slice(0, count);

  return (
    <div className="relative h-[560px] lg:h-[600px]">
      {/* glow */}
      <div className="absolute -inset-10 bg-primary/30 blur-3xl rounded-full animate-pulse-glow" />

      {/* phone-like chat frame */}
      <div className="relative h-full rounded-[2rem] border border-[var(--surface-border)] bg-card text-card-foreground shadow-[var(--shadow-glow)] overflow-hidden flex flex-col">
        {/* header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--surface-border)] bg-black/20">
          <div className="h-9 w-9 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow)]">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold">BizAI · Tư vấn HomeAppliance</div>
            <div className="flex items-center gap-1.5 text-[11px] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Đang hoạt động · Nhớ 47 cuộc trò chuyện trước
            </div>
          </div>
          <Sparkles className="h-4 w-4 text-accent" />
        </div>

        {/* messages */}
        <div className="flex-1 overflow-hidden p-4 sm:p-5 space-y-3">
          {visible.map((m, i) => (
            <ChatBubble key={i} msg={m} />
          ))}
          {typing && count < HERO_SCRIPT.length && HERO_SCRIPT[count].from === "ai" && (
            <TypingBubble />
          )}
        </div>

        {/* input */}
        <div className="border-t border-[var(--surface-border)] p-3 bg-black/20">
          <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2.5">
            <input
              disabled
              placeholder="Nhập tin nhắn..."
              className="flex-1 bg-transparent text-sm placeholder:text-white/40 outline-none text-white"
            />
            <button className="h-7 w-7 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center">
              <Send className="h-3 w-3 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* floating badges */}
      <div className="hidden sm:block absolute -left-2 sm:-left-4 top-32 rounded-2xl border border-border bg-white/95 backdrop-blur p-3 shadow-xl animate-float">
        <div className="flex items-center gap-2 text-xs text-foreground">
          <Database className="h-3.5 w-3.5 text-primary" />
          <span>Đồng bộ CRM realtime</span>
        </div>
      </div>
      <div className="hidden sm:block absolute -right-2 sm:-right-4 bottom-32 rounded-2xl border border-border bg-white/95 backdrop-blur p-3 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
        <div className="flex items-center gap-2 text-xs text-foreground">
          <Brain className="h-3.5 w-3.5 text-primary" />
          <span>Ghi nhớ ngữ cảnh</span>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ msg }: { msg: Msg }) {
  const isUser = msg.from === "user";
  return (
    <div className={`flex gap-2 animate-message-in ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="h-7 w-7 shrink-0 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center mt-1">
          <Bot className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
      )}
      <div className={`max-w-[78%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-2`}>
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
            isUser
              ? "bg-[image:var(--gradient-primary)] text-primary-foreground rounded-br-sm"
              : "bg-white/10 border border-white/15 rounded-bl-sm text-white"
          }`}
        >
          {msg.text}
        </div>
        {msg.product && <ProductCards />}
      </div>
      {isUser && (
        <div className="h-7 w-7 shrink-0 rounded-full bg-white/15 grid place-items-center mt-1">
          <User className="h-3.5 w-3.5 text-white" />
        </div>
      )}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex gap-2 justify-start animate-message-in">
      <div className="h-7 w-7 shrink-0 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center mt-1">
        <Bot className="h-3.5 w-3.5 text-primary-foreground" />
      </div>
      <div className="rounded-2xl rounded-bl-sm bg-white/10 border border-white/15 px-4 py-3 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-white/60 typing-dot"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCards() {
  const items = [
    { name: "Tủ lạnh Side-by-Side 488L", price: "11.990.000₫", tag: "Phù hợp nhất", img: fridge1 },
    { name: "Tủ lạnh Funki Mini 90L", price: "3.290.000₫", tag: "Phòng riêng", img: fridge2 },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {items.map((p) => (
        <div key={p.name} className="rounded-xl border border-white/10 bg-white/95 text-foreground p-2">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-slate-50 to-slate-200 grid place-items-center mb-2 overflow-hidden">
            <img src={p.img} alt={p.name} className="h-full w-full object-contain p-1.5" />
          </div>
          <div className="text-[9px] text-primary uppercase tracking-wider font-semibold">{p.tag}</div>
          <div className="text-[11px] font-semibold mt-0.5 leading-tight">{p.name}</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">{p.price}</div>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ title, subtitle, light }: { title: React.ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
    </div>
  );
}

/* --------------------------------------------------------- */
/* PLATFORM section — each feature with chat mock visual      */
/* --------------------------------------------------------- */
function Platform() {
  const features = [
    {
      icon: Brain,
      title: "Bộ nhớ dài hạn",
      desc: "Lưu trữ và truy xuất lịch sử tương tác, thông tin khách hàng và quy trình nội bộ xuyên suốt thời gian — không quên sau vài lượt chat.",
      visual: <MemoryVisual />,
    },
    {
      icon: Users,
      title: "Hội đồng AI đa tác vụ",
      desc: "AI Trưởng nhóm điều phối các AI thành viên xử lý nội dung, kiểm soát lỗi và tổng hợp báo cáo song song.",
      visual: <CouncilVisual />,
    },
    {
      icon: ShieldCheck,
      title: "Cơ chế phản biện",
      desc: "Hệ thống tự kiểm tra nội dung trước khi phản hồi, loại bỏ tình trạng ảo giác (Hallucination) và đảm bảo độ chính xác dữ liệu doanh nghiệp.",
      visual: <CritiqueVisual />,
    },
    {
      icon: Network,
      title: "Quản trị multi-tenant",
      desc: "Tạo nhiều phiên bản AI cho nhiều kênh OTT, chi nhánh hoặc phòng ban — vận hành song song, dữ liệu cách ly hoàn toàn.",
      visual: <TenantVisual />,
    },
    {
      icon: MonitorSmartphone,
      title: "Hợp nhất đa nền tảng OTT",
      desc: "Xóa bỏ rào cản giữa các nền tảng OTT (Zalo / Lark / Telegram / Messenger / Slack) cho phép AI thấu hiểu và phản hồi nhất quán trên mọi kênh giao tiếp.",
      visual: <OmniChannelVisual />,
      wide: true,
    },
    {
      icon: User,
      title: "Xây dựng profile khách hàng",
      desc: "Xây dựng profile khách hàng sau từng cuộc hội thoại, giúp tương tác chính xác hơn.",
      visual: <ProfileVisual />,
    },
  ];
  return (
    <section id="platform" className="relative py-20 sm:py-32 bg-tech-light bg-circuit overflow-hidden">
      <div className="tech-orb h-[380px] w-[380px] -top-20 right-0" style={{ background: "oklch(0.6 0.18 258 / 0.35)" }} />
      <div className="tech-orb h-[320px] w-[320px] bottom-0 -left-10" style={{ background: "oklch(0.7 0.14 225 / 0.3)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          title={<>06 lý do <span className="gradient-text">tích hợp dễ dàng</span></>}
          subtitle="Bộ nhớ, độ tin cậy, bảo mật, đa kênh và khả năng phối hợp đa AI — được thiết kế từ đầu cho doanh nghiệp."
        />
        <Tabs defaultValue={features[0].title} className="mt-10 sm:mt-16">
          <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent p-0 rounded-none">
            {features.map((f) => (
              <TabsTrigger
                key={f.title}
                value={f.title}
                className="group relative flex flex-col items-center text-center gap-3 py-5 px-3 h-auto rounded-2xl border-2 border-foreground/15 bg-white text-foreground shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-md data-[state=active]:bg-card data-[state=active]:text-white data-[state=active]:border-card data-[state=active]:shadow-[var(--shadow-glow)] data-[state=active]:rounded-b-none data-[state=active]:translate-y-px data-[state=active]:z-10"
              >
                <span className="h-11 w-11 grid place-items-center rounded-xl border-2 border-foreground/10 bg-foreground/[0.04] transition-colors group-hover:border-primary/40 group-hover:bg-primary/10 group-data-[state=active]:bg-white/10 group-data-[state=active]:border-white/20">
                  <f.icon className="h-5 w-5 text-primary transition-colors group-data-[state=active]:text-accent" />
                </span>
                <span className="text-sm font-semibold leading-snug whitespace-normal">
                  {f.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((f) => (
            <TabsContent key={f.title} value={f.title} className="mt-0">
              <div className="on-dark relative z-0 rounded-3xl border border-[var(--surface-border)] bg-card text-card-foreground overflow-hidden grid md:grid-cols-2 shadow-2xl shadow-primary/10">
                <div className="relative h-72 sm:h-96 bg-black/30 border-b md:border-b-0 md:border-r border-[var(--surface-border)] overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="relative h-full p-6">{f.visual}</div>
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow)]">
                      <f.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl leading-tight">{f.title}</h3>
                  </div>
                  <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

/* Mini chat bubble used inside feature visuals */
function Mini({ from, children, accent }: { from: "user" | "ai"; children: React.ReactNode; accent?: boolean }) {
  const isUser = from === "user";
  return (
    <div className={`flex gap-1.5 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="h-5 w-5 shrink-0 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center mt-0.5">
          <Bot className="h-2.5 w-2.5 text-primary-foreground" />
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[11px] leading-snug ${
          isUser
            ? "bg-[image:var(--gradient-primary)] text-primary-foreground rounded-br-sm"
            : accent
            ? "bg-accent/20 border border-accent/40 rounded-bl-sm"
            : "bg-white/5 border border-white/10 rounded-bl-sm text-white/90"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function MemoryVisual() {
  return (
    <div className="h-full flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Dòng thời gian khách hàng</div>
        <div className="text-[10px] text-accent flex items-center gap-1"><Brain className="h-3 w-3" /> 12 ngữ cảnh</div>
      </div>
      <div className="relative pl-4 space-y-2 flex-1">
        <div className="absolute left-1 top-1 bottom-1 w-px bg-white/15" />
        {[
          { time: "3 tháng trước", text: "Mua máy giặt Toshiba cửa trên 9kg", muted: true },
          { time: "5 tuần trước", text: "Hỏi mẹo tiết kiệm điện", muted: true },
          { time: "Hôm qua", text: "Đặt lịch bảo trì máy lạnh", muted: false },
        ].map((e) => (
          <div key={e.time} className="relative">
            <span className={`absolute -left-3 top-1.5 h-2 w-2 rounded-full ${e.muted ? "bg-white/30" : "bg-accent shadow-[0_0_8px_var(--accent)]"}`} />
            <div className="text-[9px] text-white/50">{e.time}</div>
            <div className={`text-[11px] ${e.muted ? "text-white/70" : "text-white font-medium"}`}>{e.text}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-accent/40 bg-accent/10 p-2.5">
        <div className="text-[9px] uppercase tracking-wider text-accent flex items-center gap-1 mb-1">
          <Sparkles className="h-2.5 w-2.5" /> AI truy xuất & phản hồi hôm nay
        </div>
        <Mini from="ai" accent>
          Chào anh A, máy giặt <b>Toshiba</b> dùng 3 năm rồi — anh muốn xem dòng lồng ngang Inverter không ạ?
        </Mini>
      </div>
    </div>
  );
}

function CouncilVisual() {
  return (
    <div className="h-full flex flex-col gap-2.5">
      <div className="rounded-xl border border-accent/40 bg-accent/10 p-2.5 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center">
          <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-white">AI Trưởng nhóm</div>
          <div className="text-[9px] text-white/60">Yêu cầu: "Soạn báo cáo tuần & gửi khách"</div>
        </div>
        <span className="text-[9px] text-accent font-semibold">3 AI</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {[
          { icon: FileText, label: "Soạn nội dung", state: "Đang chạy", pct: 70 },
          { icon: Search, label: "Kiểm tra dữ liệu", state: "Đang chạy", pct: 45 },
          { icon: ScrollText, label: "Tổng hợp BC", state: "Chờ", pct: 0 },
        ].map((a) => (
          <div key={a.label} className="rounded-lg border border-white/10 bg-white/5 p-2 flex flex-col">
            <a.icon className="h-3.5 w-3.5 text-accent" />
            <div className="text-[10px] font-medium mt-1.5 text-white">{a.label}</div>
            <div className="text-[9px] text-white/60 mt-auto flex items-center gap-1">
              <span className={`h-1 w-1 rounded-full ${a.pct > 0 ? "bg-emerald-400 animate-pulse" : "bg-white/30"}`} /> {a.state}
            </div>
            <div className="mt-1 h-1 rounded-full bg-black/40 overflow-hidden">
              <div className="h-full bg-[image:var(--gradient-primary)] transition-all" style={{ width: `${a.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-2 flex items-center gap-2">
        <Check className="h-3 w-3 text-emerald-400" />
        <span className="text-[10px] text-white">Hoàn tất song song · nhanh hơn 4× so với chạy tuần tự</span>
      </div>
    </div>
  );
}

function CritiqueVisual() {
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Quy trình 2 lớp</div>
        <div className="text-[10px] text-accent">Độ tin cậy <b className="text-white">98%</b></div>
      </div>
      <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-2.5">
        <div className="text-[9px] uppercase tracking-wider text-destructive flex items-center gap-1">
          <AlertTriangle className="h-2.5 w-2.5" /> Bản nháp AI #1 — phát hiện ảo giác
        </div>
        <div className="text-[11px] mt-1 line-through opacity-70 text-white">
          "Sản phẩm có bảo hành 5 năm, giảm 50%..."
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 flex items-start gap-1.5">
        <Eye className="h-3 w-3 text-accent mt-0.5" />
        <div className="text-[10px] text-white/60 leading-snug">
          AI Phản biện đối chiếu CRM: <span className="text-white">Bảo hành chính hãng 2 năm · ưu đãi tối đa 15%.</span>
        </div>
      </div>
      <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-2.5 flex items-start gap-1.5">
        <Check className="h-3 w-3 text-emerald-400 mt-0.5" />
        <div className="text-[11px] leading-snug text-white">
          "Sản phẩm <b>bảo hành 2 năm chính hãng</b>, ưu đãi 15% trong tuần này."
        </div>
      </div>
    </div>
  );
}

function TenantVisual() {
  const tenants = [
    { name: "Zalo OA · Bán lẻ", status: "Đang chạy", letter: "Z", color: "bg-[#0068FF]", users: "1.2k" },
    { name: "Lark · Vận hành", status: "Đang chạy", letter: "L", color: "bg-[#00D6B9]", users: "320" },
    { name: "Messenger · CSKH", status: "Đang chạy", letter: "M", color: "bg-gradient-to-br from-[#00B2FF] to-[#006AFF]", users: "850" },
    { name: "Telegram · Demo", status: "Tạm dừng", letter: "T", color: "bg-[#229ED9]", users: "45" },
  ];
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">4 phiên bản AI · 1 tổ chức</div>
        <span className="text-[10px] text-accent flex items-center gap-1"><ShieldCheck className="h-2.5 w-2.5" /> Cách ly</span>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {tenants.map((t, i) => (
          <div key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-2.5 flex flex-col">
            <div className="flex items-center gap-1.5">
              <div className={`h-5 w-5 shrink-0 rounded ${t.color} grid place-items-center text-[9px] font-bold text-white`}>
                {t.letter}
              </div>
              <div className="text-[10px] font-medium truncate text-white/90 flex-1">{t.name}</div>
              <span className="text-[9px] text-white/60">{t.users}</span>
            </div>
            <div className="mt-2 flex items-center gap-1 text-[9px] text-white/60">
              <span className={`h-1 w-1 rounded-full ${t.status === "Đang chạy" ? "bg-emerald-400 animate-pulse" : "bg-white/30"}`} />
              {t.status}
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-black/30 overflow-hidden">
              <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: `${60 + i * 10}%` }} />
            </div>
            <div className="mt-1 text-[8px] text-white/50">Dữ liệu & prompt riêng ✓</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OmniChannelVisual() {
  const channels = [
    { name: "Zalo", letter: "Z", color: "bg-[#0068FF]" },
    { name: "Lark", letter: "L", color: "bg-[#00D6B9]" },
    { name: "Telegram", letter: "T", color: "bg-[#229ED9]" },
    { name: "Messenger", letter: "M", color: "bg-gradient-to-br from-[#00B2FF] to-[#006AFF]" },
    { name: "Slack", letter: "S", color: "bg-[#4A154B]" },
  ];
  return (
    <div className="h-full flex flex-col justify-center gap-3">
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {channels.map((c) => (
          <div key={c.name} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-2 sm:p-3 text-center flex flex-col items-center justify-center">
            <div className={`h-10 w-10 sm:h-11 sm:w-11 rounded-xl ${c.color} grid place-items-center font-bold text-white text-sm sm:text-base shadow-lg`}>
              {c.letter}
            </div>
            <div className="mt-2 text-[10px] sm:text-[11px] font-medium text-white/90">{c.name}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-accent/40 bg-accent/10 p-3 flex items-center gap-2">
        <Brain className="h-4 w-4 text-accent shrink-0" />
        <span className="text-[11px] sm:text-xs font-semibold text-white">BizClaw — ngữ cảnh thống nhất trên mọi kênh OTT</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Đồng bộ lịch sử chat", ok: true },
          { label: "Phản hồi nhất quán", ok: true },
          { label: "Không cần chuyển tab", ok: true },
          { label: "Tự động nhận diện kênh", ok: true },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5">
            <Check className="h-3 w-3 text-emerald-400 shrink-0" />
            <span className="text-[10px] text-white/80">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileVisual() {
  const fields = [
    { label: "Tên", value: "Nguyễn Văn A" },
    { label: "SĐT", value: "0909xxxxxx" },
    { label: "Đơn gần nhất", value: "Tủ lạnh 488L" },
  ];
  const likes = ["Tiết kiệm điện", "Inverter", "Màu bạc"];
  return (
    <div className="h-full flex flex-col gap-2.5">
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-7 w-7 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center text-[10px] font-bold text-primary-foreground">A</div>
          <div className="flex-1">
            <div className="text-[11px] font-semibold text-white">Nguyễn Văn A</div>
            <div className="text-[9px] text-white/50">Khách VIP · 4 đơn · CLTV 32M</div>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        {fields.slice(1).map((f) => (
          <div key={f.label} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
            <span className="text-[10px] text-white/50">{f.label}</span>
            <span className="text-[10px] text-white/90 font-medium">{f.value}</span>
          </div>
        ))}
        <div className="mt-2 pt-2 border-t border-white/5">
          <div className="text-[10px] text-white/50 mb-1 flex items-center gap-1"><Sparkles className="h-2.5 w-2.5 text-accent" /> Sở thích</div>
          <div className="flex flex-wrap gap-1">
            {likes.map((l) => (
              <span key={l} className="text-[10px] px-1.5 py-0.5 rounded-md bg-accent/15 text-accent border border-accent/30">
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-white/5">
          <div className="text-[10px] text-white/50 mb-1 flex items-center gap-1"><MessageSquare className="h-2.5 w-2.5 text-accent" /> Phong cách trò chuyện</div>
          <div className="flex flex-wrap gap-1">
            {["Thân mật","Ngắn gọn","Xưng \"anh\"","Hỏi giá trước"].map((t) => (
              <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-white/80 border border-white/10">{t}</span>
            ))}
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-white/5">
          <div className="text-[10px] text-white/50 mb-1 flex items-center gap-1"><Brain className="h-2.5 w-2.5 text-accent" /> Gợi ý kế tiếp</div>
          <div className="text-[10px] text-white/90">Máy lạnh Inverter 12k BTU · ưu đãi tiết kiệm điện</div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- */
/* CAPABILITIES — feature module screens                       */
/* --------------------------------------------------------- */
function Capabilities() {
  const caps = [
    {
      tag: "BizAI Sales",
      icon: MessageSquare,
      title: "Chuyên gia tư vấn bán hàng",
      desc: "Thay thế chatbot cứng nhắc bằng tư vấn linh hoạt — nhận thức ngữ cảnh, cá nhân hóa giọng nói, đồng bộ realtime với CRM và OTT.",
      points: [
        "Phân tích vị trí, lịch sử và nội dung trước khi phản hồi",
        "Tự điều chỉnh tông giọng phù hợp từng khách hàng",
        "Kết nối CRM, Product DB, Wiki, Zalo/Messenger — không cần kịch bản thủ công",
      ],
      screen: <SalesScreen />,
    },
    {
      tag: "BizAI Care",
      icon: Headphones,
      title: "Chăm sóc khách hàng cá nhân hoá",
      desc: "Nhận diện khách hàng cũ ngay khi họ nhắn tin, truy xuất lịch sử đơn hàng và hỗ trợ xử lý vấn đề mà không cần khách lặp lại thông tin.",
      points: [
        "Định danh khách hàng qua số điện thoại, email hoặc CRM ID",
        "Truy xuất lịch sử đơn hàng, bảo hành và tương tác trước đó",
        "Chủ động hỏi đúng vấn đề, chuyển tiếp CSKH khi cần thiết",
      ],
      screen: <CareScreen />,
    },
    {
      tag: "Compliance Guard",
      icon: Eye,
      title: "Giám sát an toàn & tuân thủ dữ liệu",
      desc: "Số hóa quy trình bảo mật và kiểm soát thông tin nội bộ trên mọi kênh chat doanh nghiệp.",
      points: [
        "Phát hiện và cảnh báo chia sẻ dữ liệu nhạy cảm qua Zalo, Lark...",
        "Đảm bảo thao tác nhân viên luôn trong khung quy định doanh nghiệp",
        "Báo cáo định kỳ về an toàn dữ liệu và mức độ tuân thủ từng bộ phận",
      ],
      screen: <GuardScreen />,
    },
    {
      tag: "Knowledge Brain",
      icon: BookOpen,
      title: "Hệ thống tri thức lõi",
      desc: "Hợp nhất tài nguyên, chuẩn hóa vận hành, tối ưu trí tuệ tập thể nhằm sẵn sàng cho các hoạt động chuyển đổi số và tích hợp AI sâu trong tương lai.",
      points: [
        "Lưu trữ và xử lý đa dạng tài liệu các định dạng",
        "Kho tri thức chuẩn để tích hợp và mở rộng AI trong tương lai",
        "Đào tạo và nâng cao năng lực chuyên môn nhân viên",
      ],
      screen: <KnowledgeScreen />,
    },
  ];
  return (
    <section id="capabilities" className="on-dark relative py-20 sm:py-32 overflow-hidden bg-[oklch(0.10_0.05_258)] text-white">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-primary/30 blur-[120px] rounded-full" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          light
          title={<>4 ứng dụng cho doanh nghiệp của <span className="gradient-text">BizClaw</span>, và nhiều hơn nữa</>}
          subtitle="Sales, Chăm sóc khách hàng, Compliance Guard và Knowledge Brain — bốn module sẵn sàng cho từng bài toán vận hành thực tế."
        />
        <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8">
          {caps.map((c, idx) => (
            <div
              key={c.title}
              className={`grid lg:grid-cols-12 gap-8 sm:gap-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-12 items-center ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 text-xs text-accent uppercase tracking-widest">
                  <span>0{idx + 1}</span><span>·</span><span>{c.tag}</span>
                </div>
                <div className="mt-6 h-14 w-14 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow)]">
                  <c.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display mt-6 text-2xl sm:text-3xl md:text-4xl text-white">{c.title}</h3>
                <p className="mt-4 text-white/70 leading-relaxed">{c.desc}</p>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-accent/20 border border-accent/40 grid place-items-center">
                        <Check className="h-3 w-3 text-accent" />
                      </span>
                      <span className="text-white/90 text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl border border-[var(--surface-border)] bg-[oklch(0.16_0.05_258)] overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-black/30">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-3 text-[10px] text-white/50">app.bizclaw.vn</span>
                  </div>
                  <div className="p-4 sm:p-5 min-h-[340px]">{c.screen}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SalesScreen() {
  return (
    <div className="grid grid-cols-5 gap-3 sm:gap-4 h-full">
      <div className="col-span-3 space-y-2">
        <Mini from="user">Máy giặt 9kg nào tiết kiệm điện nhất shop?</Mini>
        <Mini from="ai">
          Em vừa kiểm tra Product DB · Lọc theo công nghệ Inverter & nhãn năng lượng 5★ 👇
        </Mini>
        <div className="rounded-xl border border-white/10 bg-white/95 text-foreground p-3 flex gap-3">
          <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center overflow-hidden">
            <img src={fridge1} alt="Tủ lạnh" className="h-full w-full object-contain p-1" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-primary font-semibold">Tiết kiệm điện · Top 1</div>
            <div className="text-xs font-semibold">Tủ lạnh Side-by-Side 488L</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">10.990.000₫ · Còn hàng tại 12 cửa hàng</div>
          </div>
        </div>
        <Mini from="user">Có khuyến mãi gì không ạ?</Mini>
        <Mini from="ai" accent>
          Anh là <b>khách thân thiết</b> — em áp mã VIP15 giảm 15% + miễn phí lắp đặt 🎁
        </Mini>
      </div>
      <div className="col-span-2 space-y-2">
        <div className="rounded-xl border border-border bg-card/80 p-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Hồ sơ KH</div>
          <div className="mt-1 text-xs font-semibold">Anh Nguyễn Minh</div>
          <div className="text-[10px] text-muted-foreground">Khách VIP · 8 đơn / năm</div>
          <div className="mt-2 h-px bg-border" />
          <div className="mt-2 space-y-1 text-[10px]">
            <div className="flex justify-between"><span className="text-muted-foreground">Lần mua gần nhất</span><span>14/03</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">LTV</span><span>87M₫</span></div>
          </div>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent/10 p-3">
          <div className="text-[10px] uppercase tracking-wider text-accent">AI Suggestion</div>
          <div className="text-[11px] mt-1">Gợi ý up-sell: máy sấy 9kg đi kèm — tỉ lệ chốt 64%.</div>
        </div>
      </div>
    </div>
  );
}

function GuardScreen() {
  return _GuardScreen();
}

function CareScreen() {
  return (
    <div className="grid grid-cols-5 gap-3 sm:gap-4 h-full">
      <div className="col-span-3 space-y-2">
        <Mini from="ai">
          Chào anh/chị 👋 Để hỗ trợ nhanh nhất, nếu anh/chị đã từng mua hàng, vui lòng gửi em <b>số điện thoại</b> đã đăng ký ạ.
        </Mini>
        <Mini from="user">0971 675 405</Mini>
        <Mini from="ai" accent>
          Em nhận diện được anh <b>Nguyễn Minh</b> — khách thân thiết của BizClaw 🎉<br />
          Em thấy gần đây anh có <b>2 đơn hàng</b>:
        </Mini>
        <div className="space-y-1.5">
          {[
            { id: "#BC-10472", item: "Tủ lạnh Side-by-Side 488L", date: "14/03/2026", status: "Đã giao", ok: true },
            { id: "#BC-10588", item: "Máy giặt Inverter 9kg", date: "02/05/2026", status: "Đang bảo hành", ok: false },
          ].map((o) => (
            <div key={o.id} className="rounded-xl border border-white/10 bg-white/95 text-foreground p-2.5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
                <PackageCheck className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold truncate">{o.item}</div>
                <div className="text-[10px] text-muted-foreground">{o.id} · {o.date}</div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${o.ok ? "bg-emerald-500/15 text-emerald-600" : "bg-yellow-500/15 text-yellow-700"}`}>
                {o.status}
              </span>
            </div>
          ))}
        </div>
        <Mini from="ai">
          Anh đang gặp vấn đề gì với <b>đơn nào</b> ạ? Ví dụ: lỗi vận hành, đổi/trả, đặt lịch bảo hành hay cần tư vấn phụ kiện thêm?
        </Mini>
      </div>
      <div className="col-span-2 space-y-2">
        <div className="rounded-xl border border-border bg-card/80 p-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Khách hàng nhận diện</div>
          <div className="mt-1 text-xs font-semibold">Nguyễn Minh</div>
          <div className="text-[10px] text-muted-foreground">VIP · 8 đơn / năm</div>
          <div className="mt-2 h-px bg-border" />
          <div className="mt-2 space-y-1 text-[10px]">
            <div className="flex justify-between"><span className="text-muted-foreground">SĐT</span><span>0971 675 ***</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tổng đơn</span><span>14</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">CSAT</span><span className="text-emerald-400">4.9 / 5</span></div>
          </div>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent/10 p-3">
          <div className="text-[10px] uppercase tracking-wider text-accent">Gợi ý của AI</div>
          <div className="text-[11px] mt-1">Đơn #BC-10588 còn 9 tháng bảo hành — đề xuất đặt lịch kỹ thuật tận nơi.</div>
        </div>
      </div>
    </div>
  );
}

function _GuardScreen() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs">
        <Eye className="h-4 w-4 text-accent" />
        <span className="font-semibold">Compliance Guard · Theo dõi realtime</span>
        <span className="ml-auto text-[10px] text-muted-foreground">Cập nhật 2s trước</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Tin nhắn quét", v: "12.847", c: "text-foreground" },
          { label: "Cảnh báo hôm nay", v: "23", c: "text-yellow-400" },
          { label: "Vi phạm chặn", v: "4", c: "text-destructive" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card/80 p-2.5">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className={`text-lg font-bold ${s.c}`}>{s.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-3">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-destructive">
          <AlertTriangle className="h-3 w-3" /> Cảnh báo nghiêm trọng · Zalo
        </div>
        <div className="text-xs mt-1.5">
          NV "Trần Hoa" đang định gửi <b>danh sách 1.240 khách hàng</b> ra ngoài tổ chức.
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-md bg-destructive px-2 py-1 text-[10px] font-medium text-destructive-foreground">Chặn tin nhắn</span>
          <span className="rounded-md border border-border px-2 py-1 text-[10px]">Báo cáo quản lý</span>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card/80 p-3 space-y-1.5">
        {[
          { t: "10:42", txt: "Phòng Sales chia sẻ tài liệu nội bộ qua Lark", ok: true },
          { t: "10:38", txt: "Phát hiện CCCD trong group OTT — đã ẩn", ok: false },
        ].map((l) => (
          <div key={l.t} className="flex items-center gap-2 text-[10px]">
            <span className="text-muted-foreground">{l.t}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${l.ok ? "bg-emerald-400" : "bg-yellow-400"}`} />
            <span className="flex-1">{l.txt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KnowledgeScreen() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {[
          { ext: "PDF", l: "Quy trình & SOP", c: "text-rose-300", bg: "bg-rose-500/15 border-rose-500/30" },
          { ext: "DOCX", l: "Hợp đồng & văn bản", c: "text-sky-300", bg: "bg-sky-500/15 border-sky-500/30" },
          { ext: "XLSX", l: "Dữ liệu vận hành", c: "text-emerald-300", bg: "bg-emerald-500/15 border-emerald-500/30" },
          { ext: "WIKI", l: "Tri thức nội bộ", c: "text-violet-300", bg: "bg-violet-500/15 border-violet-500/30" },
        ].map((f) => (
          <div key={f.ext} className={`rounded-xl border p-2 ${f.bg}`}>
            <div className={`text-[10px] font-bold ${f.c}`}>{f.ext}</div>
            <div className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{f.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-primary/40 bg-card/80 p-4">
        <div className="text-[10px] uppercase tracking-wider text-primary flex items-center gap-1">
          <Layers className="h-3 w-3" /> Hợp nhất tri thức · Sẵn sàng cho AI
        </div>
        <div className="text-xs mt-2 leading-relaxed">
          Toàn bộ tài liệu được chuẩn hoá, vector hoá và liên kết theo phòng ban —
          tạo nền tảng tri thức chuẩn để mở rộng AI Agent trong tương lai.
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Chuẩn hoá", "Vector hoá", "Phân quyền", "API mở"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-md border border-border bg-background/60 px-2 py-1 text-[10px]">
              <Check className="h-2.5 w-2.5 text-accent" /> {t}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-accent/40 bg-accent/10 p-3 flex items-start gap-2">
        <GraduationCap className="h-4 w-4 text-accent mt-0.5" />
        <div className="text-[11px] leading-snug">
          <b>Đào tạo nhân viên mới:</b> tra cứu nhanh quy trình, học chuyên môn qua đối thoại
          trực tiếp với AI — rút ngắn thời gian onboarding tới 60%.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Tài liệu đã index", v: "12.4K" },
          { l: "Phòng ban", v: "8" },
          { l: "Truy vấn / ngày", v: "3.2K" },
        ].map((m) => (
          <div key={m.l} className="rounded-lg border border-border bg-card/80 p-2.5">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
            <div className="text-base font-bold">{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------- */
/* Compliance — Nghị định 356                                  */
/* --------------------------------------------------------- */
function Compliance() {
  const items = [
    { icon: ShieldCheck, title: "Tuân thủ pháp lý Việt Nam", desc: "Đáp ứng các yêu cầu bảo vệ dữ liệu cá nhân và an ninh mạng trong nước." },
    { icon: Lock, title: "Giám sát và truy vết, có thể triển khai BYOK", desc: "Dữ liệu mỗi doanh nghiệp được mã hoá và cách ly hoàn toàn." },
    { icon: ScrollText, title: "Audit trail đầy đủ", desc: "Lưu vết toàn bộ tương tác AI để dễ dàng đối soát khi cần." },
    { icon: Server, title: "Có thể triển khai nội bộ", desc: "Thiết lập BizClaw vận hành trong môi trường doanh nghiệp, cách ly internet." },
  ];
  return (
    <section id="compliance" className="on-dark relative py-16 sm:py-20 bg-[oklch(0.13_0.05_258)] border-y border-[var(--surface-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          light
          title={<>Tuân thủ <span className="gradient-text">bảo mật</span></>}
        />
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 sm:p-6 flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-accent/20 border border-accent/40 grid place-items-center shrink-0">
                <it.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-white/70 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Deployment() {
  const steps = [
    {
      n: "01",
      icon: Settings2,
      title: "Thiết lập tài khoản",
      desc: "Khởi tạo tài khoản quản trị và phân quyền cho các bộ phận.",
      visual: (
        <div className="space-y-1.5">
          {["Admin", "Sales Lead", "CSKH"].map((r, i) => (
            <div key={r} className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-2 py-1.5">
              <div className="h-5 w-5 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center text-[8px] font-bold text-primary-foreground">{i + 1}</div>
              <span className="text-[11px]">{r}</span>
              <Check className="h-3 w-3 text-emerald-400 ml-auto" />
            </div>
          ))}
        </div>
      ),
    },
    {
      n: "02",
      icon: Cpu,
      title: "Chọn năng lực",
      desc: "Lựa chọn module: Sales, Compliance Guard hoặc Knowledge Brain.",
      visual: (
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { i: MessageSquare, l: "Sales", on: true },
            { i: Eye, l: "Guard", on: true },
            { i: BookOpen, l: "Brain", on: false },
          ].map((m) => (
            <div key={m.l} className={`rounded-lg border p-2 text-center ${m.on ? "border-primary/50 bg-primary/10" : "border-border bg-background/40"}`}>
              <m.i className={`h-4 w-4 mx-auto ${m.on ? "text-primary" : "text-muted-foreground"}`} />
              <div className="text-[10px] mt-1">{m.l}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      n: "03",
      icon: Rocket,
      title: "Triển khai đa nền tảng",
      desc: "Hệ thống tự tạo phiên bản EpClaw chuyên biệt. Add vào Lark, Zalo, Facebook... và vận hành.",
      visual: (
        <div className="space-y-1.5">
          {[
            { n: "Zalo OA", s: "Đã kết nối" },
            { n: "Lark", s: "Đã kết nối" },
            { n: "Messenger", s: "Đang kết nối..." },
          ].map((c) => (
            <div key={c.n} className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-2 py-1.5">
              <Plug className="h-3 w-3 text-accent" />
              <span className="text-[11px]">{c.n}</span>
              <span className="ml-auto text-[9px] text-muted-foreground">{c.s}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <section id="deployment" className="relative py-20 sm:py-32 bg-tech-light bg-circuit overflow-hidden">
      <div className="tech-orb h-[400px] w-[400px] -top-24 left-1/4" style={{ background: "oklch(0.6 0.18 258 / 0.32)" }} />
      <div className="tech-orb h-[320px] w-[320px] bottom-0 right-0" style={{ background: "oklch(0.7 0.14 225 / 0.3)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          title={<>Triển khai <span className="gradient-text">no-code</span> trong vài phút</>}
          subtitle="Quy trình triển khai nhanh, không yêu cầu code, phù hợp mọi quy mô doanh nghiệp."
        />
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="on-dark relative rounded-2xl border border-[var(--surface-border)] bg-card text-card-foreground p-6 sm:p-7 flex flex-col shadow-xl shadow-primary/10">
              <div className="flex items-center justify-between">
                <div className="font-display text-4xl sm:text-5xl gradient-text">{s.n}</div>
                <div className="h-12 w-12 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow)]">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mt-4 font-display text-xl sm:text-2xl text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-3">{s.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="on-dark bg-[oklch(0.10_0.05_258)] text-white border-t border-[var(--surface-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-3 gap-8 sm:gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo405} alt="405CYSE" className="h-9 w-9 object-contain bg-white rounded-lg p-1" />
            <span className="font-display text-2xl text-white">BizClaw</span>
          </div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Mô hình AI dành riêng cho doanh nghiệp đột phá — bộ nhớ dài hạn, hội đồng AI đa tác vụ, bảo mật chuẩn doanh nghiệp.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">Phát triển bởi</h4>
          <p className="mt-3 text-sm font-semibold text-white">Công ty Cổ phần An ninh mạng 405CYSE</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="tel:0971675405" className="hover:text-white">Hotline: 0971 675 405</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>85 Tân Cảng, Thạnh Mỹ Tây, Hồ Chí Minh</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">Liên kết</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li><a href="#consult" className="hover:text-white">Đăng ký tư vấn</a></li>
            <li><a href="#platform" className="hover:text-white">Nền tảng</a></li>
            <li>
              <a 
                href="https://405cyse.com/chinh-sach-bao-ve-du-lieu-ca-nhan/"
                target="_blank"
                className="hover:text-white"
                rel="noopener noreferrer"
              >
                Chính sách bảo vệ dữ liệu cá nhân
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-white/50 text-center">
          © {new Date().getFullYear()} BizClaw · Phát triển bởi 405CYSE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Họ tên phải có ít nhất 2 ký tự")
    .max(100, "Họ tên tối đa 100 ký tự"),
  phone: z
    .string()
    .trim()
    .min(9, "Số điện thoại không hợp lệ")
    .max(15, "Số điện thoại không hợp lệ")
    .regex(/^[0-9+\s().-]+$/, "Số điện thoại không hợp lệ"),
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email")
    .email("Email không hợp lệ")
    .max(255, "Email tối đa 255 ký tự"),
  message: z
    .string()
    .trim()
    .max(1000, "Lời nhắn tối đa 1000 ký tự")
    .optional()
    .or(z.literal("")),
  agreed: z.boolean().refine((val) => val === true, {
    message: "Bạn cần đồng ý với chính sách bảo vệ dữ liệu cá nhân",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ConsultSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
      agreed: false,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      await submitContactForm({ data: values });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError("Có lỗi xảy ra, vui lòng thử lại hoặc gọi trực tiếp cho chúng tôi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="consult" className="relative py-20 sm:py-28 bg-tech-light bg-circuit bg-dots overflow-hidden">
      <div className="tech-orb h-[360px] w-[360px] top-10 -right-20" style={{ background: "oklch(0.6 0.18 258 / 0.3)" }} />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="on-dark rounded-3xl border border-[var(--surface-border)] bg-[oklch(0.13_0.05_258)] overflow-hidden shadow-2xl shadow-primary/10 grid lg:grid-cols-5">
          {/* Left intro */}
          <div className="relative lg:col-span-2 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-[image:var(--gradient-hero)] overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] text-accent uppercase tracking-widest font-semibold">
                <Sparkles className="h-3 w-3" /> Liên hệ nhận demo
              </div>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl text-white leading-tight">
                Sẵn sàng <span className="gradient-text">chuyển hoá</span> kho dữ liệu thành vận hành?
              </h2>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                Để lại thông tin — đội ngũ BizClaw sẽ liên hệ trong 24h để tư vấn giải pháp phù hợp.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
              {["Tư vấn module và use case triển khai phù hợp", "Tư vấn no-code triển khai", "Báo giá minh bạch theo nhu cầu"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
              </ul>
            </div>
          </div>
          {/* Right form */}
          <div className="lg:col-span-3 p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 grid place-items-center mb-4">
                  <Check className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white">Gửi thông tin thành công!</h3>
                <p className="mt-2 text-sm text-white/60">Đội ngũ BizClaw sẽ liên hệ lại trong 24h.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm">Họ và tên</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              placeholder="Nguyễn Văn A"
                              className="w-full rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400 text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm">Số điện thoại</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="tel"
                              placeholder="09xx xxx xxx"
                              className="w-full rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400 text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 text-sm">Email</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            placeholder="ban@congty.vn"
                            className="w-full rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                          />
                        </FormControl>
                        <FormMessage className="text-rose-400 text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 text-sm">Lời nhắn <span className="text-white/40 font-normal">(tùy chọn)</span></FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={3}
                            placeholder="Chia sẻ ngắn về nhu cầu, quy mô hoặc bài toán bạn đang gặp..."
                            className="w-full rounded-lg bg-white/5 border-white/15 text-white placeholder:text-white/30 px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent transition resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-rose-400 text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agreed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start gap-3 space-y-0 pt-1">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-0.5 border-white/30 bg-white/10 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-white/70 font-normal cursor-pointer">
                            Tôi đã đọc và đồng ý với{" "}
                            <a 
                              href="https://405cyse.com/chinh-sach-bao-ve-du-lieu-ca-nhan/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent underline underline-offset-2 hover:text-white transition"
                            >
                              Chính sách Bảo vệ dữ liệu cá nhân
                            </a>
                          </FormLabel>
                          <FormMessage className="text-rose-400 text-xs" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    Liên hệ ngay
                  </button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
