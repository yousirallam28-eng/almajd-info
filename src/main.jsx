import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';
import * as XLSX from 'xlsx-js-style';
import './styles.css';

// Expose the existing integrations to the compatibility layer during migration.
window.supabase = { createClient };
window.XLSX = XLSX;

function AppShell() {
  useEffect(() => {
    import('./legacy.js');
  }, []);

  return (
    <>
      <div id="loginView" className="login-wrap">
        <form id="loginForm" className="login-card" autoComplete="on">
          <img className="brand-logo" src="/logo.jpg" alt="شعار تخزين المعلومات" />
          <h1>تخزين المعلومات</h1>
          <p className="sub">سجّل الدخول للوصول إلى مساحة العمل</p>
          <div id="loginMessage" aria-live="polite" />
          <div className="field"><label htmlFor="loginUser">اسم المستخدم</label><input id="loginUser" name="username" autoComplete="username" required /></div>
          <div className="field"><label htmlFor="loginPass">كلمة المرور</label><div className="password-row"><input id="loginPass" type="password" autoComplete="current-password" required /><button className="btn quiet" type="button" id="togglePass">إظهار</button></div></div>
          <button className="btn primary wide" type="submit">تسجيل الدخول</button>
          <button className="btn secondary wide login-install" id="installLoginBtn" type="button">⇩ تثبيت التطبيق على الجهاز</button>
          <p className="hint">نموذج محلي: البيانات محفوظة في هذا المتصفح فقط، وليست مناسبة لحماية بيانات حقيقية.</p>
        </form>
      </div>
      <div id="appView" className="app hidden">
        <header className="topbar"><div className="top-left"><button className="hamb" id="menuToggle" aria-label="فتح القائمة" aria-expanded="false">☰</button><div className="site-brand"><img className="top-logo" src="/logo.jpg" alt="" /><div className="site-title">تخزين المعلومات</div><span className="offline-badge" id="offlineBadge">دون اتصال</span><button className="install-btn" id="installBtn" type="button">⇩ تثبيت التطبيق</button></div></div><div className="user-chip"><div className="avatar" id="userAvatar">م</div><div className="identity"><strong id="currentUser" /><br /><span id="currentRole" /></div><button className="logout" id="logoutBtn">تسجيل الخروج</button></div></header>
        <div className="layout"><aside id="sidebar" className="sidebar closed"><div className="side-label">القائمة</div><button className="navbtn" id="homeNav">▦ &nbsp; معلومات التخزين</button><button className="navbtn hidden" id="adminNav">⚙ &nbsp; لوحة الإدارة</button><button className="navbtn" id="networkNav">⌘ &nbsp; شبكة المعلومات</button></aside><main id="main" className="main" tabIndex="-1" /></div>
      </div>
      <div id="dialogHost" /><div id="toastHost" className="toastbox" aria-live="polite" />
    </>
  );
}

createRoot(document.getElementById('root')).render(<AppShell />);
