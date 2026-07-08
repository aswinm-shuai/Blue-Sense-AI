        /* ============================================================
           BLUE SENSE AI — application logic
           ============================================================ */
        (function () {
            "use strict";

            /* ---------- i18n ---------- */
            const I18N = {
                id: {
                    auth_hero_title: "Kolam sehat, panen maksimal.",
                    auth_hero_sub: "Pantau pH, suhu, oksigen terlarut, amonia, kekeruhan, dan tinggi air kolam Anda secara real-time — lengkap dengan prediksi AI dan kontrol otomatis aerator & pompa.",
                    auth_stat_1: "Monitoring", auth_stat_2: "Parameter Sensor", auth_stat_3: "Prediksi & Rekomendasi",
                    tab_login: "Masuk", tab_register: "Daftar", tab_forgot: "Lupa Password",
                    lbl_email: "Email", lbl_password: "Password", lbl_name: "Nama Lengkap", lbl_remember: "Ingat saya",
                    btn_login: "Masuk", btn_google: "Masuk dengan Google", btn_register: "Buat Akun", btn_send: "Kirim Tautan Reset",
                    demo_hint: "Demo: gunakan akun apa pun untuk mendaftar, lalu masuk.",
                    forgot_desc: "Masukkan email Anda, kami akan mengirimkan tautan reset password (simulasi).",
                    forgot_sent: "Tautan reset password telah dikirim ke email Anda.",
                    nav_main: "Utama", nav_dashboard: "Dashboard", nav_sensors: "Sensor", nav_history: "Riwayat", nav_ai: "Prediksi AI", nav_chat: "Chat AI",
                    nav_iot: "Perangkat IoT", nav_devices: "Perangkat", nav_control: "Kontrol",
                    nav_ops: "Operasional", nav_schedule: "Jadwal", nav_harvest: "Estimasi Panen", nav_reports: "Laporan", nav_ponds: "Kelola Kolam",
                    nav_account: "Akun", nav_profile: "Profil", nav_settings: "Pengaturan", nav_logout: "Keluar",
                    dash_title: "Dashboard Monitoring", dash_sub: "Kondisi kolam Anda secara real-time",
                    dash_score: "Health Score", dash_status_ok: "Semua parameter dalam kondisi ideal untuk pertumbuhan ikan.",
                    dash_updated: "Diperbarui", dash_ponds: "Kolam Terhubung", dash_devices_on: "Perangkat Online", dash_alerts: "Notifikasi Aktif",
                    dash_trend: "Tren 24 Jam Terakhir", dash_params: "Parameter Sensor", dash_rec: "Rekomendasi AI Terbaru", dash_devstat: "Status Perangkat",
                    sensors_sub: "Detail seluruh pembacaan sensor IoT kolam terpilih",
                    history_sub: "Analisis tren perubahan parameter dari waktu ke waktu",
                    range_day: "Harian", range_week: "Mingguan", range_month: "Bulanan",
                    ai_sub: "Analisis prediktif berbasis data historis sensor", ai_forecast: "Prediksi 24 Jam ke Depan",
                    ai_forecast_note: "Model memperkirakan tren berdasarkan 7 hari data terakhir.",
                    ai_riskfactors: "Faktor Risiko Terdeteksi", ai_actions: "Rekomendasi Tindakan Otomatis",
                    chat_sub: "Tanyakan apa saja seputar kondisi kolam dan budidaya ikan Anda",
                    devices_sub: "Kelola koneksi ESP32 dan sensor pada setiap kolam", devices_add: "Tambah Perangkat",
                    control_sub: "Kendalikan aerator, pompa, dan katup air secara langsung atau otomatis",
                    schedule_sub: "Atur pengingat pemberian pakan, pergantian air, dan vitamin", schedule_add: "Tambah Jadwal",
                    harvest_sub: "Perkirakan waktu panen berdasarkan pertumbuhan & kondisi kolam",
                    harvest_fish_type: "Jenis Ikan", harvest_age: "Umur Ikan (hari)", harvest_weight: "Berat Rata-rata Saat Ini (gram)",
                    harvest_calc: "Hitung Estimasi", harvest_placeholder: "Masukkan data ikan pada form di samping untuk melihat estimasi waktu panen.",
                    reports_sub: "Unduh ringkasan kondisi kolam dalam format PDF atau Excel", reports_type: "Jenis Laporan",
                    reports_daily: "Laporan Harian", reports_monthly: "Laporan Bulanan", reports_pdf: "Ekspor PDF", reports_csv: "Ekspor Excel (CSV)",
                    reports_preview_hint: "Pratinjau laporan akan tampil di sini.",
                    ponds_sub: "Kelola beberapa kolam dalam satu akun", ponds_add: "Tambah Kolam", ponds_arch: "Arsitektur Sistem",
                    profile_role: "Peran", profile_save: "Simpan Perubahan", profile_saved: "Tersimpan!", profile_activity: "Log Aktivitas",
                    role_1: "Peternak Ikan Air Tawar", role_2: "Peternak Ikan Air Laut", role_3: "Pemilik Tambak", role_4: "UMKM Budidaya Ikan", role_5: "Dinas Perikanan / Peneliti",
                    settings_appearance: "Tampilan", settings_dark: "Mode Gelap", settings_lang: "Bahasa", settings_notif: "Notifikasi Push",
                    settings_sync: "Sinkronisasi & Data", settings_cloud_backup: "Backup Otomatis ke Cloud", settings_offline: "Mode Offline",
                    settings_offline_note: "Data tetap tersimpan sementara dan akan disinkronkan otomatis saat koneksi kembali tersedia.",
                    settings_threshold: "Ambang Batas Sensor (per Jenis Ikan)",
                    pair_title: "Hubungkan Perangkat IoT", pair_qr: "Scan QR Code", pair_id: "Input Device ID",
                    pair_qr_hint: "Arahkan kamera ke QR Code pada perangkat ESP32 (simulasi otomatis).", pair_scan_btn: "Mulai Pemindaian",
                    pair_device_name: "Nama Perangkat", pair_device_id: "Device ID", pair_location: "Lokasi Kolam", pair_connect: "Hubungkan",
                    wifi_title: "Pengaturan WiFi ESP32", wifi_connect: "Hubungkan", wifi_success: "Perangkat berhasil terhubung ke jaringan baru.",
                    calib_title: "Kalibrasi Sensor pH", calib_step1_desc: "Celupkan sensor pH ke dalam larutan buffer pH 7.0, lalu tekan Mulai Kalibrasi.", calib_start: "Mulai Kalibrasi",
                    ponds_add_title: "Tambah Kolam Baru", ponds_name: "Nama Kolam", ponds_create: "Buat Kolam",
                    schedule_add_title: "Tambah Jadwal", schedule_activity: "Aktivitas", schedule_time: "Waktu", schedule_repeat: "Pengulangan", schedule_save: "Simpan Jadwal",
                    sched_feed: "Pemberian Pakan", sched_water: "Pergantian Air", sched_vitamin: "Pemberian Vitamin", sched_maint: "Perawatan Kolam",
                    sched_daily: "Setiap Hari", sched_weekly: "Setiap Minggu", sched_once: "Sekali",
                    notif_title: "Notifikasi",
                    status_aman: "Aman", status_waspada: "Waspada", status_bahaya: "Bahaya"
                },
                en: {
                    auth_hero_title: "Healthy ponds, maximum harvest.",
                    auth_hero_sub: "Monitor pH, temperature, dissolved oxygen, ammonia, turbidity, and water level in real time — complete with AI predictions and automatic aerator & pump control.",
                    auth_stat_1: "Monitoring", auth_stat_2: "Sensor Parameters", auth_stat_3: "AI Prediction & Advice",
                    tab_login: "Login", tab_register: "Register", tab_forgot: "Forgot Password",
                    lbl_email: "Email", lbl_password: "Password", lbl_name: "Full Name", lbl_remember: "Remember me",
                    btn_login: "Login", btn_google: "Sign in with Google", btn_register: "Create Account", btn_send: "Send Reset Link",
                    demo_hint: "Demo: use any account to register, then log in.",
                    forgot_desc: "Enter your email and we'll send a password reset link (simulated).",
                    forgot_sent: "A password reset link has been sent to your email.",
                    nav_main: "Main", nav_dashboard: "Dashboard", nav_sensors: "Sensors", nav_history: "History", nav_ai: "AI Prediction", nav_chat: "AI Chat",
                    nav_iot: "IoT Devices", nav_devices: "Devices", nav_control: "Control",
                    nav_ops: "Operations", nav_schedule: "Schedule", nav_harvest: "Harvest Estimate", nav_reports: "Reports", nav_ponds: "Manage Ponds",
                    nav_account: "Account", nav_profile: "Profile", nav_settings: "Settings", nav_logout: "Log Out",
                    dash_title: "Monitoring Dashboard", dash_sub: "Your pond conditions in real time",
                    dash_score: "Health Score", dash_status_ok: "All parameters are in ideal condition for fish growth.",
                    dash_updated: "Updated", dash_ponds: "Connected Ponds", dash_devices_on: "Devices Online", dash_alerts: "Active Alerts",
                    dash_trend: "Last 24 Hour Trend", dash_params: "Sensor Parameters", dash_rec: "Latest AI Recommendations", dash_devstat: "Device Status",
                    sensors_sub: "Detailed IoT sensor readings for the selected pond",
                    history_sub: "Analyze parameter trends over time",
                    range_day: "Daily", range_week: "Weekly", range_month: "Monthly",
                    ai_sub: "Predictive analysis based on historical sensor data", ai_forecast: "Next 24-Hour Forecast",
                    ai_forecast_note: "The model estimates trends based on the last 7 days of data.",
                    ai_riskfactors: "Detected Risk Factors", ai_actions: "Automatic Action Recommendations",
                    chat_sub: "Ask anything about your pond conditions and fish farming",
                    devices_sub: "Manage ESP32 and sensor connections for each pond", devices_add: "Add Device",
                    control_sub: "Control aerators, pumps, and water valves manually or automatically",
                    schedule_sub: "Set reminders for feeding, water changes, and vitamins", schedule_add: "Add Schedule",
                    harvest_sub: "Estimate harvest time based on growth & pond conditions",
                    harvest_fish_type: "Fish Species", harvest_age: "Fish Age (days)", harvest_weight: "Current Average Weight (grams)",
                    harvest_calc: "Calculate Estimate", harvest_placeholder: "Enter fish data on the form to see the harvest time estimate.",
                    reports_sub: "Download a summary of pond conditions in PDF or Excel format", reports_type: "Report Type",
                    reports_daily: "Daily Report", reports_monthly: "Monthly Report", reports_pdf: "Export PDF", reports_csv: "Export Excel (CSV)",
                    reports_preview_hint: "Report preview will appear here.",
                    ponds_sub: "Manage multiple ponds in one account", ponds_add: "Add Pond", ponds_arch: "System Architecture",
                    profile_role: "Role", profile_save: "Save Changes", profile_saved: "Saved!", profile_activity: "Activity Log",
                    role_1: "Freshwater Fish Farmer", role_2: "Saltwater Fish Farmer", role_3: "Pond Owner", role_4: "Fish Farming SME", role_5: "Fisheries Agency / Researcher",
                    settings_appearance: "Appearance", settings_dark: "Dark Mode", settings_lang: "Language", settings_notif: "Push Notifications",
                    settings_sync: "Sync & Data", settings_cloud_backup: "Automatic Cloud Backup", settings_offline: "Offline Mode",
                    settings_offline_note: "Data stays stored temporarily and syncs automatically once connection is restored.",
                    settings_threshold: "Sensor Thresholds (per Fish Species)",
                    pair_title: "Connect IoT Device", pair_qr: "Scan QR Code", pair_id: "Enter Device ID",
                    pair_qr_hint: "Point the camera at the QR code on the ESP32 device (simulated).", pair_scan_btn: "Start Scanning",
                    pair_device_name: "Device Name", pair_device_id: "Device ID", pair_location: "Pond Location", pair_connect: "Connect",
                    wifi_title: "ESP32 WiFi Settings", wifi_connect: "Connect", wifi_success: "Device successfully connected to the new network.",
                    calib_title: "pH Sensor Calibration", calib_step1_desc: "Dip the pH sensor into pH 7.0 buffer solution, then press Start Calibration.", calib_start: "Start Calibration",
                    ponds_add_title: "Add New Pond", ponds_name: "Pond Name", ponds_create: "Create Pond",
                    schedule_add_title: "Add Schedule", schedule_activity: "Activity", schedule_time: "Time", schedule_repeat: "Repeat", schedule_save: "Save Schedule",
                    sched_feed: "Feeding", sched_water: "Water Change", sched_vitamin: "Vitamin Dosing", sched_maint: "Pond Maintenance",
                    sched_daily: "Daily", sched_weekly: "Weekly", sched_once: "Once",
                    notif_title: "Notifications",
                    status_aman: "Safe", status_waspada: "Caution", status_bahaya: "Danger"
                }
            };
            let currentLang = localStorage.getItem('bsa_lang') || 'id';

            function applyI18n() {
                document.documentElement.lang = currentLang;
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (I18N[currentLang][key]) el.textContent = I18N[currentLang][key];
                });
                document.getElementById('langLabel').textContent = currentLang.toUpperCase();
                const ls = document.getElementById('langSelect'); if (ls) ls.value = currentLang;
                renderAllDynamic();
            }
            function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || key; }

            /* ---------- Utility ---------- */
            const $ = (sel, ctx) => (ctx || document).querySelector(sel);
            const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
            function uid(prefix) { return prefix + '_' + Math.random().toString(36).slice(2, 9); }
            function nowStr() { return new Date().toLocaleString(currentLang === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short' }); }
            function showToast(msg, variant) {
                const toastEl = document.getElementById('mainToast');
                toastEl.className = 'toast align-items-center border-0 text-white bg-' + (variant || 'primary');
                document.getElementById('mainToastBody').textContent = msg;
                new bootstrap.Toast(toastEl, { delay: 3200 }).show();
            }
            function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
            function rand(min, max) { return Math.random() * (max - min) + min; }

            /* ---------- Auth (localStorage) ---------- */
            const AUTH_KEY = 'bsa_users';
            const SESSION_KEY = 'bsa_session';
            function getUsers() { return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]'); }
            function saveUsers(u) { localStorage.setItem(AUTH_KEY, JSON.stringify(u)); }
            function simpleHash(str) { // NOT secure crypto — demo-only obfuscation
                let h = 0; for (let i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0; }
                return 'h' + Math.abs(h) + str.length;
            }
            function currentUser() {
                const s = JSON.parse(localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY) || 'null');
                return s;
            }
            function setSession(user, remember) {
                const payload = JSON.stringify({ email: user.email, name: user.name });
                if (remember) { localStorage.setItem(SESSION_KEY, payload); } else { sessionStorage.setItem(SESSION_KEY, payload); }
            }
            function clearSession() { localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY); }

            document.querySelectorAll('.auth-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    document.querySelectorAll('.auth-tab').forEach(x => x.classList.remove('active'));
                    tab.classList.add('active');
                    const which = tab.getAttribute('data-authtab');
                    document.querySelectorAll('.auth-pane').forEach(p => p.style.display = 'none');
                    document.getElementById(which + 'Form').style.display = 'block';
                });
            });

            function handleRegisterSubmit() {
                const name = $('#regName').value.trim();
                const email = $('#regEmail').value.trim().toLowerCase();
                const pass = $('#regPassword').value;
                const errEl = $('#regError');
                if (!name) { errEl.textContent = currentLang === 'id' ? 'Nama wajib diisi.' : 'Name is required.'; errEl.style.display = 'block'; return; }
                const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                if (!emailOk) { errEl.textContent = currentLang === 'id' ? 'Format email tidak valid.' : 'Invalid email format.'; errEl.style.display = 'block'; return; }
                if (pass.length < 6) { errEl.textContent = currentLang === 'id' ? 'Password minimal 6 karakter.' : 'Password must be at least 6 characters.'; errEl.style.display = 'block'; return; }
                const users = getUsers();
                if (users.find(u => u.email === email)) { errEl.textContent = currentLang === 'id' ? 'Email sudah terdaftar.' : 'Email already registered.'; errEl.style.display = 'block'; return; }
                users.push({ name, email, pass: simpleHash(pass) });
                saveUsers(users);
                errEl.style.display = 'none';
                showToast(currentLang === 'id' ? 'Akun berhasil dibuat! Silakan masuk.' : 'Account created! Please log in.', 'success');
                document.querySelector('.auth-tab[data-authtab="login"]').click();
                $('#loginEmail').value = email;
            }
            $('#registerForm button[data-i18n="btn_register"]').addEventListener('click', handleRegisterSubmit);
            ['#regName', '#regEmail', '#regPassword'].forEach(sel => {
                $(sel).addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); handleRegisterSubmit(); } });
            });

            function handleLoginSubmit() {
                const email = $('#loginEmail').value.trim().toLowerCase();
                const pass = $('#loginPassword').value;
                const errEl = $('#loginError');
                if (!email || !pass) { errEl.textContent = currentLang === 'id' ? 'Email dan password wajib diisi.' : 'Email and password are required.'; errEl.style.display = 'block'; return; }
                const users = getUsers();
                const user = users.find(u => u.email === email && u.pass === simpleHash(pass));
                if (!user) { errEl.textContent = currentLang === 'id' ? 'Email atau password salah.' : 'Incorrect email or password.'; errEl.style.display = 'block'; return; }
                errEl.style.display = 'none';
                setSession(user, $('#rememberMe').checked);
                enterApp(user);
            }
            $('#loginForm button[data-i18n="btn_login"]').addEventListener('click', handleLoginSubmit);
            ['#loginEmail', '#loginPassword'].forEach(sel => {
                $(sel).addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); handleLoginSubmit(); } });
            });

            $('#googleLoginBtn').addEventListener('click', () => {
                const demoUser = { name: 'Google User', email: 'google.user@demo.com' };
                const users = getUsers();
                if (!users.find(u => u.email === demoUser.email)) { users.push({ ...demoUser, pass: simpleHash('google-oauth') }); saveUsers(users); }
                setSession(demoUser, true);
                showToast(currentLang === 'id' ? 'Berhasil masuk dengan Google (simulasi).' : 'Signed in with Google (simulated).', 'success');
                enterApp(demoUser);
            });

            function handleForgotSubmit() {
                const email = $('#forgotEmail').value.trim();
                if (!email) return;
                $('#forgotMsg').style.display = 'block';
            }
            $('#forgotForm button[data-i18n="btn_send"]').addEventListener('click', handleForgotSubmit);
            $('#forgotEmail').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); handleForgotSubmit(); } });

            function logout() {
                clearSession();
                document.getElementById('appShell').style.display = 'none';
                document.getElementById('authScreen').style.display = 'flex';
                if (simTimer) { clearInterval(simTimer); simTimer = null; }
            }
            $('#logoutBtn').addEventListener('click', logout);
            $('#logoutBtn2').addEventListener('click', (e) => { e.preventDefault(); logout(); });

            /* ---------- Ponds & Sensor State ---------- */
            const FISH_THRESHOLDS = {
                lele: { ph: [6.5, 8.5], suhu: [25, 30], do: [3, 7], amonia: [0, 0.5], kekeruhan: [0, 50], tinggi: [60, 150] },
                nila: { ph: [6.5, 8.5], suhu: [25, 32], do: [4, 8], amonia: [0, 0.3], kekeruhan: [0, 40], tinggi: [80, 150] },
                gurame: { ph: [6.0, 8.0], suhu: [24, 28], do: [3, 6], amonia: [0, 0.4], kekeruhan: [0, 45], tinggi: [80, 180] },
                patin: { ph: [6.5, 8.5], suhu: [26, 30], do: [3, 7], amonia: [0, 0.5], kekeruhan: [0, 60], tinggi: [100, 200] },
            };
            const SENSOR_META = {
                ph: { icon: 'bi-droplet-half', unit: '', label: 'pH', color: '#0EA5E9' },
                suhu: { icon: 'bi-thermometer-half', unit: '°C', label: { id: 'Suhu Air', en: 'Water Temp' }, color: '#F5A524' },
                do: { icon: 'bi-wind', unit: 'mg/L', label: 'DO (Oksigen)', color: '#14B8A6' },
                amonia: { icon: 'bi-exclamation-triangle', unit: 'mg/L', label: 'Amonia', color: '#EF4444' },
                kekeruhan: { icon: 'bi-water', unit: 'NTU', label: { id: 'Kekeruhan', en: 'Turbidity' }, color: '#6366F1' },
                tinggi: { icon: 'bi-arrows-vertical', unit: 'cm', label: { id: 'Tinggi Air', en: 'Water Level' }, color: '#0891B2' },
            };
            function loadPonds() {
                let ponds = JSON.parse(localStorage.getItem('bsa_ponds') || 'null');
                if (!ponds) {
                    ponds = [
                        mkPond('Kolam Lele A', 'lele'),
                        mkPond('Kolam Nila 2', 'nila'),
                        mkPond('Kolam Gurame B', 'gurame'),
                    ];
                }
                return ponds;
            }
            function mkPond(name, fish) {
                const th = FISH_THRESHOLDS[fish];
                const mid = k => (th[k][0] + th[k][1]) / 2;
                return {
                    id: uid('pond'), name, fish,
                    sensors: { ph: mid('ph'), suhu: mid('suhu'), do: mid('do'), amonia: th.amonia[0] + 0.05, kekeruhan: mid('kekeruhan') * 0.6, tinggi: mid('tinggi') },
                    history: { ph: [], suhu: [], do: [], amonia: [], kekeruhan: [], tinggi: [] },
                    devices: [
                        { id: uid('dev'), name: 'ESP32 Utama', location: name, status: 'online', wifi: 82, lastSync: Date.now() },
                    ],
                    control: { aerator: true, pompa: false, katup: false, autoMode: true },
                };
            }
            let PONDS = loadPonds();
            let activePondId = PONDS[0].id;
            function activePond() { return PONDS.find(p => p.id === activePondId); }
            function persistPonds() { localStorage.setItem('bsa_ponds', JSON.stringify(PONDS)); }

            function statusForValue(param, val, fish) {
                const th = FISH_THRESHOLDS[fish][param];
                const [lo, hi] = th;
                const span = hi - lo;
                if (val >= lo && val <= hi) return 'aman';
                if (val >= lo - span * 0.15 && val <= hi + span * 0.15) return 'waspada';
                return 'bahaya';
            }
            function overallStatus(pond) {
                let worst = 'aman';
                Object.keys(pond.sensors).forEach(k => {
                    const s = statusForValue(k, pond.sensors[k], pond.fish);
                    if (s === 'bahaya') worst = 'bahaya';
                    else if (s === 'waspada' && worst !== 'bahaya') worst = 'waspada';
                });
                return worst;
            }
            function healthScore(pond) {
                const weights = { ph: 20, suhu: 15, do: 20, amonia: 20, kekeruhan: 12, tinggi: 13 };
                let score = 0;
                Object.keys(weights).forEach(k => {
                    const s = statusForValue(k, pond.sensors[k], pond.fish);
                    const factor = s === 'aman' ? 1 : (s === 'waspada' ? 0.55 : 0.15);
                    score += weights[k] * factor;
                });
                return Math.round(score);
            }

            /* ---------- Simulation ---------- */
            let simTimer = null;
            function stepSimulation() {
                PONDS.forEach(pond => {
                    const th = FISH_THRESHOLDS[pond.fish];
                    Object.keys(pond.sensors).forEach(k => {
                        let v = pond.sensors[k];
                        const drift = rand(-1, 1) * (k === 'ph' ? 0.08 : (k === 'suhu' ? 0.25 : (k === 'do' ? 0.15 : (k === 'amonia' ? 0.02 : (k === 'kekeruhan' ? 1.2 : 1.5)))));
                        v += drift;
                        const [lo, hi] = th[k];
                        const floor = k === 'amonia' ? -0.05 : lo - (hi - lo) * 0.4;
                        const ceil = hi + (hi - lo) * 0.4;
                        v = clamp(v, Math.max(0, floor), ceil);
                        pond.sensors[k] = Math.round(v * 100) / 100;
                        pond.history[k].push(pond.sensors[k]);
                        if (pond.history[k].length > 200) pond.history[k].shift();
                    });
                    pond.devices.forEach(d => {
                        if (Math.random() < 0.04) { d.status = d.status === 'online' ? (Math.random() < 0.5 ? 'delay' : 'offline') : 'online'; }
                        if (d.status === 'online') { d.lastSync = Date.now(); d.wifi = clamp(d.wifi + rand(-4, 4), 15, 100); }
                    });
                    // auto control logic
                    if (pond.control.autoMode) {
                        pond.control.aerator = pond.sensors.do < th.do[0] + 0.5 ? true : pond.control.aerator;
                        if (pond.sensors.do > th.do[1]) pond.control.aerator = false;
                    }
                });
                persistPonds();
                maybeNotify();
                renderAllDynamic();
            }
            function startSimulation() {
                if (simTimer) clearInterval(simTimer);
                stepSimulation();
                simTimer = setInterval(stepSimulation, 5000);
            }

            /* ---------- Notifications ---------- */
            let NOTIFS = JSON.parse(localStorage.getItem('bsa_notifs') || '[]');
            function persistNotifs() { localStorage.setItem('bsa_notifs', JSON.stringify(NOTIFS)); }
            let lastNotifTime = {};
            function maybeNotify() {
                const pond = activePond();
                Object.keys(pond.sensors).forEach(k => {
                    const s = statusForValue(k, pond.sensors[k], pond.fish);
                    if (s !== 'aman') {
                        const key = pond.id + '_' + k;
                        const last = lastNotifTime[key] || 0;
                        if (Date.now() - last > 60000) {
                            lastNotifTime[key] = Date.now();
                            const meta = SENSOR_META[k];
                            const label = typeof meta.label === 'object' ? meta.label[currentLang] : meta.label;
                            NOTIFS.unshift({ id: uid('notif'), level: s, text: (currentLang === 'id' ? `${label} pada ${pond.name} berada pada level ${s.toUpperCase()} (${pond.sensors[k]}${meta.unit})` : `${label} on ${pond.name} is at ${s.toUpperCase()} level (${pond.sensors[k]}${meta.unit})`), time: Date.now() });
                            if (NOTIFS.length > 40) NOTIFS.pop();
                        }
                    }
                });
                persistNotifs();
                updateNotifBadge();
            }
            function updateNotifBadge() {
                document.getElementById('notifDot').style.display = NOTIFS.length > 0 ? 'block' : 'none';
                const el = document.getElementById('statAlerts'); if (el) el.textContent = NOTIFS.length;
            }

            /* ---------- Rendering ---------- */
            let miniTrendChart, historyChart, forecastChart;
            const CHART_COLORS = { grid: '#E3EEF3' };

            function renderStatusBanner(pond) {
                const status = overallStatus(pond);
                const banner = document.getElementById('statusBanner');
                banner.className = 'status-banner ' + status + ' h-100';
                document.getElementById('statusLabel').textContent = t('status_' + status);
                const descs = {
                    aman: currentLang === 'id' ? 'Semua parameter dalam kondisi ideal untuk pertumbuhan ikan.' : 'All parameters are in ideal condition for fish growth.',
                    waspada: currentLang === 'id' ? 'Beberapa parameter mendekati batas ideal, perlu perhatian.' : 'Some parameters are nearing the ideal limit and need attention.',
                    bahaya: currentLang === 'id' ? 'Kondisi kritis terdeteksi! Segera lakukan tindakan.' : 'Critical condition detected! Take action immediately.'
                };
                document.getElementById('statusDesc').textContent = descs[status];
                document.getElementById('lastUpdated').textContent = nowStr();
                const score = healthScore(pond);
                document.getElementById('healthScoreNum').textContent = score;
                const circumference = 314;
                document.getElementById('gaugeFill').setAttribute('stroke-dashoffset', circumference - (circumference * score / 100));
            }

            function sensorCardHTML(pond, key, detailed) {
                const meta = SENSOR_META[key];
                const label = typeof meta.label === 'object' ? meta.label[currentLang] : meta.label;
                const val = pond.sensors[key];
                const status = statusForValue(key, val, pond.fish);
                const th = FISH_THRESHOLDS[pond.fish][key];
                return `<div class="col-md-4 col-sm-6">
    <div class="sensor-card ${status}">
      <div class="d-flex justify-content-between align-items-start">
        <div class="sic" style="background:${meta.color}22;color:${meta.color};"><i class="bi ${meta.icon}"></i></div>
        <span class="pill-tag pill-${status}">${t('status_' + status)}</span>
      </div>
      <div class="mt-1 small-muted">${label}</div>
      <div class="sval">${val}<span class="sunit"> ${meta.unit}</span></div>
      <div class="small-muted mt-1" style="font-size:.75rem;">${currentLang === 'id' ? 'Ideal' : 'Ideal'}: ${th[0]}–${th[1]} ${meta.unit}</div>
      ${detailed ? `<div class="sparkline"><canvas id="spark-${key}"></canvas></div>` : `<div class="sparkline"><canvas id="spark-dash-${key}"></canvas></div>`}
    </div>
  </div>`;
            }
            let sparkCharts = {};
            function renderSparklines(pond, prefix) {
                Object.keys(SENSOR_META).forEach(key => {
                    const canvasId = prefix + key;
                    const canvas = document.getElementById(canvasId);
                    if (!canvas) return;
                    const data = pond.history[key].slice(-30);
                    if (sparkCharts[canvasId]) sparkCharts[canvasId].destroy();
                    sparkCharts[canvasId] = new Chart(canvas, {
                        type: 'line',
                        data: { labels: data.map((_, i) => i), datasets: [{ data, borderColor: SENSOR_META[key].color, borderWidth: 2, pointRadius: 0, tension: .4, fill: true, backgroundColor: SENSOR_META[key].color + '18' }] },
                        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } } }
                    });
                });
            }

            function renderSensorGrid() {
                const pond = activePond();
                document.getElementById('sensorGrid').innerHTML = Object.keys(SENSOR_META).map(k => sensorCardHTML(pond, k, false)).join('');
                document.getElementById('sensorDetailGrid').innerHTML = Object.keys(SENSOR_META).map(k => sensorCardHTML(pond, k, true)).join('');
                renderSparklines(pond, 'spark-dash-');
                renderSparklines(pond, 'spark-');
            }

            function renderMiniTrend() {
                const pond = activePond();
                const labels = pond.history.ph.slice(-24).map((_, i) => i);
                const ctx = document.getElementById('miniTrendChart');
                if (miniTrendChart) miniTrendChart.destroy();
                miniTrendChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels, datasets: [
                            { label: 'pH', data: pond.history.ph.slice(-24), borderColor: '#0EA5E9', borderWidth: 2, pointRadius: 0, tension: .4 },
                            { label: 'Suhu', data: pond.history.suhu.slice(-24), borderColor: '#F5A524', borderWidth: 2, pointRadius: 0, tension: .4, yAxisID: 'y1' },
                        ]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
                        plugins: { legend: { display: true, position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } } },
                        scales: { x: { display: false }, y: { display: false }, y1: { display: false, position: 'right' } }
                    }
                });
            }

            function renderHistoryChart() {
                const pond = activePond();
                const param = document.getElementById('historyParamSelect').value;
                const range = document.querySelector('.range-btn.active').getAttribute('data-range');
                let data = pond.history[param];
                let count = range === 'day' ? 24 : (range === 'week' ? 7 * 24 : 30);
                data = data.length ? data.slice(-count) : Array.from({ length: count }, () => pond.sensors[param]);
                const meta = SENSOR_META[param];
                const ctx = document.getElementById('historyChart');
                if (historyChart) historyChart.destroy();
                historyChart = new Chart(ctx, {
                    type: 'line',
                    data: { labels: data.map((_, i) => i), datasets: [{ label: (typeof meta.label === 'object' ? meta.label[currentLang] : meta.label), data, borderColor: meta.color, backgroundColor: meta.color + '22', fill: true, tension: .4, pointRadius: 0, borderWidth: 2 }] },
                    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: CHART_COLORS.grid } } } }
                });
            }
            document.getElementById('historyParamSelect').addEventListener('change', renderHistoryChart);
            document.querySelectorAll('.range-btn').forEach(btn => btn.addEventListener('click', () => {
                document.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active'); renderHistoryChart();
            }));

            function renderForecast() {
                const pond = activePond();
                const base = pond.sensors.do;
                const th = FISH_THRESHOLDS[pond.fish].do;
                const trendDown = base < (th[0] + th[1]) / 2;
                const forecast = Array.from({ length: 12 }, (_, i) => Math.round((base + (trendDown ? -i * 0.08 : i * 0.03) + rand(-0.1, 0.1)) * 100) / 100);
                const ctx = document.getElementById('forecastChart');
                if (forecastChart) forecastChart.destroy();
                forecastChart = new Chart(ctx, {
                    type: 'line',
                    data: { labels: forecast.map((_, i) => '+' + (i * 2) + 'h'), datasets: [{ label: 'DO (mg/L)', data: forecast, borderColor: '#14B8A6', backgroundColor: '#14B8A622', borderDash: [0], fill: true, tension: .35, pointRadius: 2 }] },
                    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { color: CHART_COLORS.grid } }, x: { grid: { display: false } } } }
                });
                document.getElementById('forecastNote').textContent = trendDown
                    ? (currentLang === 'id' ? `Model AI memperkirakan kadar oksigen terlarut akan terus menurun dalam 24 jam ke depan pada ${pond.name}.` : `The AI model predicts dissolved oxygen will keep declining over the next 24 hours at ${pond.name}.`)
                    : (currentLang === 'id' ? `Model AI memperkirakan kondisi kolam ${pond.name} tetap stabil dalam 24 jam ke depan.` : `The AI model predicts ${pond.name} will remain stable over the next 24 hours.`);

                const risks = [];
                Object.keys(pond.sensors).forEach(k => {
                    const s = statusForValue(k, pond.sensors[k], pond.fish);
                    if (s !== 'aman') {
                        const meta = SENSOR_META[k]; const label = typeof meta.label === 'object' ? meta.label[currentLang] : meta.label;
                        risks.push({ level: s, key: k, label });
                    }
                });
                const riskList = document.getElementById('riskFactorList');
                if (risks.length === 0) {
                    riskList.innerHTML = `<div class="text-center py-4 small-muted"><i class="bi bi-shield-check fs-2 text-success d-block mb-2"></i>${currentLang === 'id' ? 'Tidak ada risiko signifikan terdeteksi saat ini.' : 'No significant risk detected right now.'}</div>`;
                } else {
                    riskList.innerHTML = risks.map(r => `<div class="notif-item"><div class="ic" style="background:${r.level === 'bahaya' ? '#EF444422' : '#F5A52422'};color:${r.level === 'bahaya' ? '#EF4444' : '#F5A524'};"><i class="bi bi-exclamation-triangle-fill"></i></div><div><div class="fw-semibold small">${r.label} — ${t('status_' + r.level)}</div><div class="small-muted" style="font-size:.8rem;">${currentLang === 'id' ? 'Berpotensi memengaruhi kesehatan ikan bila dibiarkan.' : 'May affect fish health if left unaddressed.'}</div></div></div>`).join('');
                }
                renderAiRecommendations();
            }

            function getRecommendations(pond) {
                const recs = [];
                const s = pond.sensors; const fish = pond.fish;
                const stat = k => statusForValue(k, s[k], fish);
                if (stat('do') !== 'aman') recs.push({ icon: 'bi-fan', text: currentLang === 'id' ? `Nyalakan aerator karena kadar DO ${s.do} mg/L di ${pond.name} rendah.` : `Turn on the aerator — DO level is ${s.do} mg/L at ${pond.name}.` });
                if (stat('amonia') !== 'aman') recs.push({ icon: 'bi-arrow-repeat', text: currentLang === 'id' ? `Ganti sebagian air kolam karena kadar amonia meningkat (${s.amonia} mg/L).` : `Perform a partial water change — ammonia is elevated (${s.amonia} mg/L).` });
                if (stat('ph') !== 'aman' && s.ph < FISH_THRESHOLDS[fish].ph[0]) recs.push({ icon: 'bi-droplet', text: currentLang === 'id' ? `Tambahkan kapur dolomit karena pH terlalu rendah (${s.ph}).` : `Add dolomite lime — pH is too low (${s.ph}).` });
                if (stat('suhu') !== 'aman' && s.suhu > FISH_THRESHOLDS[fish].suhu[1]) recs.push({ icon: 'bi-egg-fried', text: currentLang === 'id' ? `Kurangi pemberian pakan karena suhu air terlalu tinggi (${s.suhu}°C).` : `Reduce feeding — water temperature is too high (${s.suhu}°C).` });
                if (stat('kekeruhan') !== 'aman') recs.push({ icon: 'bi-filter', text: currentLang === 'id' ? `Periksa filter dan lakukan penyaringan tambahan, kekeruhan tinggi (${s.kekeruhan} NTU).` : `Check the filter and add extra filtration — turbidity is high (${s.kekeruhan} NTU).` });
                if (recs.length === 0) recs.push({ icon: 'bi-check-circle', text: currentLang === 'id' ? `Kondisi ${pond.name} optimal. Pertahankan rutinitas perawatan saat ini.` : `${pond.name} is in optimal condition. Keep up the current care routine.` });
                return recs;
            }
            function renderAiRecommendations() {
                const pond = activePond();
                const recs = getRecommendations(pond);
                const html = recs.map(r => `<div class="rec-card"><div class="ic"><i class="bi ${r.icon}"></i></div><div class="small">${r.text}</div></div>`).join('');
                document.getElementById('aiRecList').innerHTML = html;
                document.getElementById('dashRecList').innerHTML = recs.slice(0, 3).map(r => `<div class="rec-card"><div class="ic"><i class="bi ${r.icon}"></i></div><div class="small">${r.text}</div></div>`).join('');
            }

            function renderDashDevices() {
                const pond = activePond();
                document.getElementById('dashDeviceList').innerHTML = pond.devices.map(d => `
    <div class="d-flex align-items-center justify-content-between py-2" style="border-bottom:1px dashed var(--bs-border);">
      <div class="d-flex align-items-center gap-2"><span class="device-status-dot ${d.status}"></span><span class="small fw-semibold">${d.name}</span></div>
      <span class="small-muted">${d.wifi}% <i class="bi bi-wifi"></i></span>
    </div>`).join('');
                document.getElementById('statPonds').textContent = PONDS.length;
                const totalDev = PONDS.reduce((a, p) => a + p.devices.length, 0);
                const onlineDev = PONDS.reduce((a, p) => a + p.devices.filter(d => d.status === 'online').length, 0);
                document.getElementById('statDevices').textContent = onlineDev + '/' + totalDev;
            }

            function deviceCardHTML(pond, d) {
                const statusLabelMap = { online: currentLang === 'id' ? 'Online' : 'Online', delay: currentLang === 'id' ? 'Tertunda' : 'Delay', offline: 'Offline' };
                return `<div class="col-md-6 col-lg-4">
    <div class="device-card">
      <div class="d-flex justify-content-between align-items-start mb-2">
        <div>
          <div class="fw-semibold">${d.name}</div>
          <div class="small-muted">${pond.name}</div>
        </div>
        <span class="d-flex align-items-center gap-1 small fw-semibold"><span class="device-status-dot ${d.status}"></span>${statusLabelMap[d.status]}</span>
      </div>
      <div class="small-muted mb-1"><i class="bi bi-wifi me-1"></i>${currentLang === 'id' ? 'Sinyal WiFi' : 'WiFi Signal'}: ${Math.round(d.wifi)}%</div>
      <div class="small-muted mb-3"><i class="bi bi-clock-history me-1"></i>${currentLang === 'id' ? 'Sinkron terakhir' : 'Last sync'}: ${new Date(d.lastSync).toLocaleTimeString(currentLang === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit' })}</div>
      <div class="d-flex gap-2 flex-wrap">
        <button class="btn btn-sm btn-outline-water flex-fill" onclick="BSA.openWifi('${pond.id}','${d.id}')"><i class="bi bi-wifi me-1"></i>WiFi</button>
        <button class="btn btn-sm btn-outline-water flex-fill" onclick="BSA.openCalib('${pond.id}','${d.id}')"><i class="bi bi-sliders me-1"></i>${currentLang === 'id' ? 'Kalibrasi' : 'Calibrate'}</button>
      </div>
    </div>
  </div>`;
            }
            function renderDevices() {
                let html = '';
                PONDS.forEach(pond => pond.devices.forEach(d => html += deviceCardHTML(pond, d)));
                document.getElementById('deviceGrid').innerHTML = html || `<div class="small-muted">${currentLang === 'id' ? 'Belum ada perangkat.' : 'No devices yet.'}</div>`;
            }

            function controlCardHTML(pond) {
                const c = pond.control;
                return `<div class="col-lg-6">
    <div class="card-x"><div class="card-body-x">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="fw-semibold"><i class="bi bi-water me-2 text-primary"></i>${pond.name}</div>
        <div class="d-flex align-items-center gap-2 small">
          <span class="small-muted">${currentLang === 'id' ? 'Mode Otomatis' : 'Auto Mode'}</span>
          <div class="toggle-switch ${c.autoMode ? 'on' : ''}" onclick="BSA.toggleAuto('${pond.id}')"><div class="knob"></div></div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center py-2" style="border-bottom:1px dashed var(--bs-border);">
        <span><i class="bi bi-fan me-2"></i>${currentLang === 'id' ? 'Aerator' : 'Aerator'}</span>
        <div class="toggle-switch ${c.aerator ? 'on' : ''}" onclick="BSA.toggleControl('${pond.id}','aerator')"><div class="knob"></div></div>
      </div>
      <div class="d-flex justify-content-between align-items-center py-2" style="border-bottom:1px dashed var(--bs-border);">
        <span><i class="bi bi-arrow-repeat me-2"></i>${currentLang === 'id' ? 'Pompa Air' : 'Water Pump'}</span>
        <div class="toggle-switch ${c.pompa ? 'on' : ''}" onclick="BSA.toggleControl('${pond.id}','pompa')"><div class="knob"></div></div>
      </div>
      <div class="d-flex justify-content-between align-items-center py-2">
        <span><i class="bi bi-sliders2 me-2"></i>${currentLang === 'id' ? 'Katup Air' : 'Water Valve'}</span>
        <div class="toggle-switch ${c.katup ? 'on' : ''}" onclick="BSA.toggleControl('${pond.id}','katup')"><div class="knob"></div></div>
      </div>
    </div></div>
  </div>`;
            }
            function renderControl() { document.getElementById('controlGrid').innerHTML = PONDS.map(controlCardHTML).join(''); }

            /* ---------- Schedule ---------- */
            let SCHEDULES = JSON.parse(localStorage.getItem('bsa_schedules') || 'null') || [
                { id: uid('sch'), activity: 'sched_feed', time: '07:00', repeat: 'sched_daily' },
                { id: uid('sch'), activity: 'sched_water', time: '16:00', repeat: 'sched_weekly' },
            ];
            function persistSchedules() { localStorage.setItem('bsa_schedules', JSON.stringify(SCHEDULES)); }
            function renderSchedule() {
                const icons = { sched_feed: 'bi-egg-fried', sched_water: 'bi-droplet-fill', sched_vitamin: 'bi-capsule', sched_maint: 'bi-tools' };
                document.getElementById('scheduleList').innerHTML = SCHEDULES.map(s => `
    <div class="col-md-6 col-lg-4">
      <div class="card-x"><div class="card-body-x d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-3">
          <div class="sic" style="background:rgba(14,165,233,.1);color:var(--bs-primary-c);"><i class="bi ${icons[s.activity] || 'bi-calendar-check'}"></i></div>
          <div><div class="fw-semibold small">${t(s.activity)}</div><div class="small-muted">${s.time} · ${t(s.repeat)}</div></div>
        </div>
        <button class="btn btn-sm btn-outline-danger border-0" onclick="BSA.deleteSchedule('${s.id}')"><i class="bi bi-trash"></i></button>
      </div></div>
    </div>`).join('') || `<div class="small-muted">${currentLang === 'id' ? 'Belum ada jadwal.' : 'No schedules yet.'}</div>`;
            }

            /* ---------- Chat AI ---------- */
            let CHAT_HISTORY = JSON.parse(sessionStorage.getItem('bsa_chat') || 'null') || [
                { role: 'bot', text: currentLang === 'id' ? 'Halo! Saya asisten AI budidaya ikan Blue Sense. Tanyakan tentang kondisi kolam, pakan, atau kualitas air Anda.' : "Hi! I'm the Blue Sense AI farming assistant. Ask me about your pond conditions, feeding, or water quality." }
            ];
            function persistChat() { sessionStorage.setItem('bsa_chat', JSON.stringify(CHAT_HISTORY)); }
            function renderChat() {
                const win = document.getElementById('chatWindow');
                win.innerHTML = CHAT_HISTORY.map(m => `<div class="chat-bubble ${m.role === 'bot' ? 'bot' : 'user'}">${m.text}</div>`).join('');
                win.scrollTop = win.scrollHeight;
            }
            function chatReply(msg) {
                const pond = activePond(); const s = pond.sensors; const low = msg.toLowerCase();
                if (/ph/.test(low)) return currentLang === 'id' ? `Nilai pH saat ini di ${pond.name} adalah ${s.ph}. Kisaran ideal untuk ${pond.fish} adalah ${FISH_THRESHOLDS[pond.fish].ph.join('–')}.` : `Current pH at ${pond.name} is ${s.ph}. The ideal range for ${pond.fish} is ${FISH_THRESHOLDS[pond.fish].ph.join('–')}.`;
                if (/suhu|temp/.test(low)) return currentLang === 'id' ? `Suhu air saat ini ${s.suhu}°C. Idealnya berada di kisaran ${FISH_THRESHOLDS[pond.fish].suhu.join('–')}°C.` : `Current water temperature is ${s.suhu}°C. Ideal range is ${FISH_THRESHOLDS[pond.fish].suhu.join('–')}°C.`;
                if (/do|oksigen|oxygen/.test(low)) return currentLang === 'id' ? `Kadar DO saat ini ${s.do} mg/L. Jika di bawah ${FISH_THRESHOLDS[pond.fish].do[0]} mg/L, nyalakan aerator segera.` : `Current DO level is ${s.do} mg/L. If it drops below ${FISH_THRESHOLDS[pond.fish].do[0]} mg/L, turn on the aerator immediately.`;
                if (/amonia|ammonia/.test(low)) return currentLang === 'id' ? `Kadar amonia saat ini ${s.amonia} mg/L. Jika meningkat, segera lakukan pergantian air sebagian.` : `Current ammonia level is ${s.amonia} mg/L. If it rises, perform a partial water change soon.`;
                if (/pakan|feed/.test(low)) return currentLang === 'id' ? `Untuk ${pond.fish}, berikan pakan 2-3 kali sehari sesuai umur ikan. Kurangi porsi jika suhu air terlalu tinggi.` : `For ${pond.fish}, feed 2-3 times a day depending on fish age. Reduce portions if water temperature is too high.`;
                if (/panen|harvest/.test(low)) return currentLang === 'id' ? `Gunakan menu Estimasi Panen untuk menghitung perkiraan waktu panen berdasarkan umur dan berat ikan Anda.` : `Use the Harvest Estimate menu to calculate the expected harvest time based on your fish's age and weight.`;
                if (/sehat|health|status|kondisi/.test(low)) return currentLang === 'id' ? `Status kolam ${pond.name} saat ini: ${t('status_' + overallStatus(pond))}, dengan Health Score ${healthScore(pond)}/100.` : `Current status for ${pond.name}: ${t('status_' + overallStatus(pond))}, with a Health Score of ${healthScore(pond)}/100.`;
                return currentLang === 'id' ? 'Saya dapat membantu menjelaskan kondisi pH, suhu, DO, amonia, jadwal pakan, atau estimasi panen. Silakan tanyakan salah satunya!' : "I can help explain pH, temperature, DO, ammonia, feeding schedules, or harvest estimates. Feel free to ask about any of these!";
            }
            document.getElementById('chatSendBtn').addEventListener('click', sendChat);
            document.getElementById('chatInput').addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });
            function sendChat() {
                const input = document.getElementById('chatInput');
                const val = input.value.trim(); if (!val) return;
                CHAT_HISTORY.push({ role: 'user', text: val });
                input.value = '';
                renderChat();
                setTimeout(() => {
                    CHAT_HISTORY.push({ role: 'bot', text: chatReply(val) });
                    persistChat(); renderChat();
                }, 500);
            }

            /* ---------- Harvest Estimator ---------- */
            const GROWTH_RATE = { lele: 2.8, nila: 2.2, gurame: 1.1, patin: 2.4 }; // grams/day approx
            const TARGET_WEIGHT = { lele: 250, nila: 300, gurame: 500, patin: 800 };
            document.getElementById('calcHarvestBtn').addEventListener('click', () => {
                const fish = document.getElementById('harvestFishType').value;
                const age = parseFloat(document.getElementById('harvestAge').value) || 0;
                const weight = parseFloat(document.getElementById('harvestWeight').value) || 0;
                const pond = activePond();
                const status = overallStatus(pond);
                const qualityFactor = status === 'aman' ? 1 : (status === 'waspada' ? 0.8 : 0.55);
                const rate = GROWTH_RATE[fish] * qualityFactor;
                const target = TARGET_WEIGHT[fish];
                const remaining = Math.max(0, target - weight);
                const daysLeft = rate > 0 ? Math.ceil(remaining / rate) : 0;
                const harvestDate = new Date(Date.now() + daysLeft * 86400000);
                document.getElementById('harvestResult').innerHTML = `
    <i class="bi bi-calendar-event fs-1 text-primary mb-2"></i>
    <div class="fs-3 fw-bold mono">${daysLeft} ${currentLang === 'id' ? 'hari lagi' : 'days left'}</div>
    <div class="small-muted mb-2">${currentLang === 'id' ? 'Perkiraan tanggal panen' : 'Estimated harvest date'}: <b>${harvestDate.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: '2-digit', month: 'long', year: 'numeric' })}</b></div>
    <div class="small-muted">${currentLang === 'id' ? 'Target berat panen' : 'Target harvest weight'}: ${target}g · ${currentLang === 'id' ? 'Kondisi kolam' : 'Pond condition'}: <span class="pill-tag pill-${status}">${t('status_' + status)}</span></div>
  `;
            });

            /* ---------- Reports ---------- */
            document.getElementById('exportPdfBtn').addEventListener('click', () => {
                const pond = activePond();
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                const type = document.getElementById('reportType').value;
                doc.setFontSize(18); doc.setTextColor(14, 165, 233); doc.text('Blue Sense AI', 14, 18);
                doc.setFontSize(11); doc.setTextColor(40, 40, 40);
                doc.text((type === 'harian' ? (currentLang === 'id' ? 'Laporan Harian' : 'Daily Report') : (currentLang === 'id' ? 'Laporan Bulanan' : 'Monthly Report')) + ' — ' + pond.name, 14, 28);
                doc.text('Tanggal: ' + new Date().toLocaleDateString(), 14, 35);
                let y = 48;
                doc.setFontSize(13); doc.text('Ringkasan Parameter', 14, y); y += 8;
                doc.setFontSize(10);
                Object.keys(SENSOR_META).forEach(k => {
                    const meta = SENSOR_META[k]; const label = typeof meta.label === 'object' ? meta.label[currentLang] : meta.label;
                    doc.text(`${label}: ${pond.sensors[k]} ${meta.unit}  (${t('status_' + statusForValue(k, pond.sensors[k], pond.fish))})`, 14, y);
                    y += 7;
                });
                y += 6;
                doc.setFontSize(13); doc.text('Health Score: ' + healthScore(pond) + '/100', 14, y); y += 9;
                doc.setFontSize(13); doc.text('Rekomendasi AI', 14, y); y += 8;
                doc.setFontSize(10);
                getRecommendations(pond).forEach(r => { doc.text('• ' + r.text, 14, y, { maxWidth: 180 }); y += 10; });
                doc.save(`BlueSenseAI_Laporan_${pond.name.replace(/\s+/g, '_')}.pdf`);
                showToast(currentLang === 'id' ? 'Laporan PDF berhasil diunduh.' : 'PDF report downloaded.', 'success');
            });
            document.getElementById('exportCsvBtn').addEventListener('click', () => {
                const pond = activePond();
                let csv = 'Parameter,Nilai,Satuan,Status\n';
                Object.keys(SENSOR_META).forEach(k => {
                    const meta = SENSOR_META[k]; const label = typeof meta.label === 'object' ? meta.label[currentLang] : meta.label;
                    csv += `${label},${pond.sensors[k]},${meta.unit},${t('status_' + statusForValue(k, pond.sensors[k], pond.fish))}\n`;
                });
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a'); a.href = url; a.download = `BlueSenseAI_${pond.name.replace(/\s+/g, '_')}.csv`; a.click();
                URL.revokeObjectURL(url);
                showToast(currentLang === 'id' ? 'File CSV berhasil diunduh.' : 'CSV file downloaded.', 'success');
            });
            function renderReportPreview() {
                const pond = activePond();
                document.getElementById('reportPreview').innerHTML = `
    <div class="fw-semibold mb-2">${pond.name} — ${new Date().toLocaleDateString()}</div>
    <div class="row g-2">
      ${Object.keys(SENSOR_META).map(k => {
                    const meta = SENSOR_META[k]; const label = typeof meta.label === 'object' ? meta.label[currentLang] : meta.label;
                    return `<div class="col-6 col-md-4 small"><span class="small-muted">${label}:</span> <b class="mono">${pond.sensors[k]}${meta.unit}</b></div>`;
                }).join('')}
    </div>
    <div class="mt-2 small-muted">Health Score: <b>${healthScore(pond)}/100</b></div>
  `;
            }

            /* ---------- Ponds management ---------- */
            function renderPondManage() {
                document.getElementById('pondManageGrid').innerHTML = PONDS.map(p => `
    <div class="col-md-6 col-lg-4">
      <div class="card-x"><div class="card-body-x">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div><div class="fw-semibold">${p.name}</div><div class="small-muted text-capitalize">${p.fish}</div></div>
          <span class="pill-tag pill-${overallStatus(p)}">${t('status_' + overallStatus(p))}</span>
        </div>
        <div class="small-muted mb-2">${p.devices.length} ${currentLang === 'id' ? 'perangkat' : 'device(s)'} · Health ${healthScore(p)}/100</div>
        <button class="btn btn-sm btn-outline-water w-100" onclick="BSA.switchPond('${p.id}')">${currentLang === 'id' ? 'Lihat Kolam' : 'View Pond'}</button>
      </div></div>
    </div>`).join('');
            }

            /* ---------- Pond switcher (topbar) ---------- */
            function renderPondSwitcher() {
                const pond = activePond();
                document.getElementById('pondPillName').textContent = pond.name;
                const statusColors = { aman: '#14B8A6', waspada: '#F5A524', bahaya: '#EF4444' };
                document.getElementById('pondDot').style.background = statusColors[overallStatus(pond)];
                document.getElementById('pondDropdownMenu').innerHTML = PONDS.map(p => `<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#" onclick="BSA.switchPond('${p.id}');return false;"><span>${p.name}</span><span class="pill-tag pill-${overallStatus(p)}" style="font-size:.65rem;">${t('status_' + overallStatus(p))}</span></a></li>`).join('');
            }

            /* ---------- Notifications panel ---------- */
            function renderNotifPanel() {
                const body = document.getElementById('notifOffcanvasBody');
                if (NOTIFS.length === 0) { body.innerHTML = `<div class="text-center small-muted py-5"><i class="bi bi-bell-slash fs-2 d-block mb-2"></i>${currentLang === 'id' ? 'Tidak ada notifikasi.' : 'No notifications.'}</div>`; return; }
                body.innerHTML = NOTIFS.map(n => `<div class="notif-item"><div class="ic" style="background:${n.level === 'bahaya' ? '#EF444422' : '#F5A52422'};color:${n.level === 'bahaya' ? '#EF4444' : '#F5A524'};"><i class="bi bi-exclamation-triangle-fill"></i></div><div><div class="small">${n.text}</div><div class="small-muted" style="font-size:.72rem;">${new Date(n.time).toLocaleTimeString()}</div></div></div>`).join('');
            }
            document.getElementById('notifBtn').addEventListener('click', () => {
                renderNotifPanel();
                new bootstrap.Offcanvas(document.getElementById('notifOffcanvas')).show();
            });

            /* ---------- Threshold editor ---------- */
            function renderThresholdEditor() {
                const fish = document.getElementById('thresholdFishSelect').value;
                const th = FISH_THRESHOLDS[fish];
                document.getElementById('thresholdEditor').innerHTML = Object.keys(th).map(k => {
                    const meta = SENSOR_META[k]; const label = typeof meta.label === 'object' ? meta.label[currentLang] : meta.label;
                    return `<div class="threshold-row">
      <div class="small fw-semibold">${label}</div>
      <input type="number" step="0.1" class="form-control form-control-sm" id="th-${k}-min" value="${th[k][0]}">
      <input type="number" step="0.1" class="form-control form-control-sm" id="th-${k}-max" value="${th[k][1]}">
    </div>`;
                }).join('');
            }
            document.getElementById('thresholdFishSelect').addEventListener('change', renderThresholdEditor);
            document.getElementById('saveThresholdBtn').addEventListener('click', () => {
                const fish = document.getElementById('thresholdFishSelect').value;
                Object.keys(FISH_THRESHOLDS[fish]).forEach(k => {
                    const min = parseFloat(document.getElementById(`th-${k}-min`).value);
                    const max = parseFloat(document.getElementById(`th-${k}-max`).value);
                    if (!isNaN(min) && !isNaN(max)) FISH_THRESHOLDS[fish][k] = [min, max];
                });
                showToast(currentLang === 'id' ? 'Ambang batas disimpan.' : 'Thresholds saved.', 'success');
                renderAllDynamic();
            });

            /* ---------- Activity log ---------- */
            let ACTIVITY_LOG = JSON.parse(localStorage.getItem('bsa_activity') || '[]');
            function logActivity(text) { ACTIVITY_LOG.unshift({ text, time: Date.now() }); if (ACTIVITY_LOG.length > 60) ACTIVITY_LOG.pop(); localStorage.setItem('bsa_activity', JSON.stringify(ACTIVITY_LOG)); renderActivityLog(); }
            function renderActivityLog() {
                const el = document.getElementById('activityLog'); if (!el) return;
                el.innerHTML = ACTIVITY_LOG.slice(0, 25).map(a => `<div class="d-flex justify-content-between py-2" style="border-bottom:1px dashed var(--bs-border);"><span class="small">${a.text}</span><span class="small-muted" style="font-size:.72rem;">${new Date(a.time).toLocaleTimeString()}</span></div>`).join('') || `<div class="small-muted">${currentLang === 'id' ? 'Belum ada aktivitas.' : 'No activity yet.'}</div>`;
            }

            /* ---------- Global render dispatcher ---------- */
            function renderAllDynamic() {
                const pond = activePond();
                renderPondSwitcher();
                renderStatusBanner(pond);
                renderSensorGrid();
                renderMiniTrend();
                renderDashDevices();
                renderAiRecommendations();
                renderDevices();
                renderControl();
                renderSchedule();
                renderPondManage();
                renderThresholdEditor();
                updateNotifBadge();
                if (document.getElementById('view-history').classList.contains('active')) renderHistoryChart();
                if (document.getElementById('view-ai').classList.contains('active')) renderForecast();
                if (document.getElementById('view-chat').classList.contains('active')) renderChat();
                if (document.getElementById('view-reports').classList.contains('active')) renderReportPreview();
            }

            /* ---------- Navigation ---------- */
            function goToView(name) {
                document.querySelectorAll('.nav-item-x[data-view]').forEach(n => n.classList.toggle('active', n.getAttribute('data-view') === name));
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                const target = document.getElementById('view-' + name);
                if (target) target.classList.add('active');
                if (name === 'history') renderHistoryChart();
                if (name === 'ai') renderForecast();
                if (name === 'chat') renderChat();
                if (name === 'reports') renderReportPreview();
                document.getElementById('sidebar').classList.remove('open');
                document.getElementById('scrim').classList.remove('show');
            }
            document.querySelectorAll('[data-view]').forEach(el => {
                el.addEventListener('click', (e) => { e.preventDefault(); goToView(el.getAttribute('data-view')); });
            });
            document.getElementById('hamburgerBtn').addEventListener('click', () => {
                document.getElementById('sidebar').classList.add('open'); document.getElementById('scrim').classList.add('show');
            });
            document.getElementById('scrim').addEventListener('click', () => {
                document.getElementById('sidebar').classList.remove('open'); document.getElementById('scrim').classList.remove('show');
            });

            /* ---------- Theme ---------- */
            function applyTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                document.getElementById('themeIcon').className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
                document.getElementById('darkModeSwitch').classList.toggle('on', theme === 'dark');
                localStorage.setItem('bsa_theme', theme);
            }
            document.getElementById('themeToggle').addEventListener('click', () => {
                const cur = document.documentElement.getAttribute('data-theme');
                applyTheme(cur === 'dark' ? 'light' : 'dark');
            });
            document.getElementById('darkModeSwitch').addEventListener('click', function () {
                const isOn = this.classList.contains('on');
                applyTheme(isOn ? 'light' : 'dark');
            });

            /* ---------- Language ---------- */
            document.getElementById('langToggle').addEventListener('click', () => {
                currentLang = currentLang === 'id' ? 'en' : 'id';
                localStorage.setItem('bsa_lang', currentLang);
                applyI18n();
            });
            document.getElementById('langSelect').addEventListener('change', function () {
                currentLang = this.value; localStorage.setItem('bsa_lang', currentLang); applyI18n();
            });

            /* ---------- Generic toggle switches ---------- */
            ['pushNotifSwitch', 'cloudBackupSwitch', 'offlineModeSwitch'].forEach(id => {
                document.getElementById(id).addEventListener('click', function () { this.classList.toggle('on'); });
            });

            /* ---------- Device pairing modal ---------- */
            document.querySelectorAll('[data-pairtab]').forEach(tab => {
                tab.addEventListener('click', () => {
                    document.querySelectorAll('[data-pairtab]').forEach(x => x.classList.remove('active'));
                    tab.classList.add('active');
                    const which = tab.getAttribute('data-pairtab');
                    document.getElementById('pairPane-qr').style.display = which === 'qr' ? 'block' : 'none';
                    document.getElementById('pairPane-id').style.display = which === 'id' ? 'block' : 'none';
                });
            });
            document.getElementById('simulateScanBtn').addEventListener('click', function () {
                this.disabled = true; this.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>${currentLang === 'id' ? 'Memindai...' : 'Scanning...'}`;
                setTimeout(() => {
                    const pond = activePond();
                    pond.devices.push({ id: uid('dev'), name: 'ESP32-' + Math.random().toString(36).slice(2, 7).toUpperCase(), location: pond.name, status: 'online', wifi: rand(60, 95), lastSync: Date.now() });
                    persistPonds();
                    logActivity((currentLang === 'id' ? 'Perangkat baru terhubung ke ' : 'New device connected to ') + pond.name);
                    showToast(currentLang === 'id' ? 'Perangkat berhasil terhubung!' : 'Device connected successfully!', 'success');
                    bootstrap.Modal.getInstance(document.getElementById('pairModal')).hide();
                    this.disabled = false; this.innerHTML = t('pair_scan_btn');
                    renderAllDynamic();
                }, 1800);
            });
            document.getElementById('addDeviceIdBtn').addEventListener('click', () => {
                const name = document.getElementById('newDeviceName').value.trim() || 'ESP32 Baru';
                const devId = document.getElementById('newDeviceId').value.trim();
                if (!devId) { showToast(currentLang === 'id' ? 'Device ID wajib diisi.' : 'Device ID is required.', 'danger'); return; }
                const pond = activePond();
                pond.devices.push({ id: uid('dev'), name, location: document.getElementById('newDeviceLocation').value.trim() || pond.name, status: 'online', wifi: rand(60, 95), lastSync: Date.now() });
                persistPonds();
                logActivity((currentLang === 'id' ? 'Perangkat ditambahkan: ' : 'Device added: ') + name);
                showToast(currentLang === 'id' ? 'Perangkat berhasil ditambahkan.' : 'Device added successfully.', 'success');
                bootstrap.Modal.getInstance(document.getElementById('pairModal')).hide();
                document.getElementById('newDeviceName').value = ''; document.getElementById('newDeviceId').value = ''; document.getElementById('newDeviceLocation').value = '';
                renderAllDynamic();
            });

            /* ---------- WiFi & Calibration modal handlers ---------- */
            let wifiCtx = null, calibCtx = null;
            window.BSA = {
                openWifi(pondId, devId) { wifiCtx = { pondId, devId }; document.getElementById('wifiSuccessMsg').style.display = 'none'; document.getElementById('wifiSsid').value = ''; document.getElementById('wifiPassword').value = ''; new bootstrap.Modal(document.getElementById('wifiModal')).show(); },
                openCalib(pondId, devId) {
                    calibCtx = { pondId, devId };
                    document.getElementById('calibStep1').classList.add('active');
                    document.getElementById('calibStep2').classList.remove('active');
                    document.getElementById('calibStep3').classList.remove('active');
                    document.getElementById('calibContent').innerHTML = `<i class="bi bi-droplet-half fs-1 text-primary mb-3 d-block"></i><p class="small-muted">${t('calib_step1_desc')}</p><button class="btn btn-water" id="calibNextBtn">${t('calib_start')}</button>`;
                    bindCalibNext(1);
                    new bootstrap.Modal(document.getElementById('calibModal')).show();
                },
                switchPond(pondId) { activePondId = pondId; renderAllDynamic(); goToView('dashboard'); },
                toggleControl(pondId, key) {
                    const pond = PONDS.find(p => p.id === pondId);
                    pond.control[key] = !pond.control[key];
                    persistPonds();
                    logActivity(`${key} ${pond.control[key] ? (currentLang === 'id' ? 'dinyalakan' : 'turned on') : (currentLang === 'id' ? 'dimatikan' : 'turned off')} — ${pond.name}`);
                    renderControl();
                },
                toggleAuto(pondId) {
                    const pond = PONDS.find(p => p.id === pondId);
                    pond.control.autoMode = !pond.control.autoMode;
                    persistPonds(); renderControl();
                },
                deleteSchedule(id) { SCHEDULES = SCHEDULES.filter(s => s.id !== id); persistSchedules(); renderSchedule(); }
            };
            function bindCalibNext(step) {
                document.getElementById('calibNextBtn').addEventListener('click', function () {
                    if (step < 3) {
                        document.getElementById('calibStep' + (step + 1)).classList.add('active');
                        const msgs = {
                            2: currentLang === 'id' ? 'Bilas sensor dengan air bersih, lalu celupkan ke larutan buffer pH 4.0.' : 'Rinse the sensor with clean water, then dip it into pH 4.0 buffer solution.',
                            3: currentLang === 'id' ? 'Kalibrasi hampir selesai. Tekan tombol di bawah untuk menyimpan hasil kalibrasi.' : 'Calibration almost done. Press the button below to save the calibration result.'
                        };
                        document.getElementById('calibContent').innerHTML = `<i class="bi bi-droplet-half fs-1 text-primary mb-3 d-block"></i><p class="small-muted">${msgs[step + 1]}</p><button class="btn btn-water" id="calibNextBtn">${step + 1 === 3 ? (currentLang === 'id' ? 'Selesai' : 'Finish') : (currentLang === 'id' ? 'Lanjut' : 'Next')}</button>`;
                        bindCalibNext(step + 1);
                    } else {
                        document.getElementById('calibContent').innerHTML = `<i class="bi bi-check-circle-fill fs-1 text-success mb-3 d-block"></i><p class="fw-semibold">${currentLang === 'id' ? 'Kalibrasi Berhasil!' : 'Calibration Successful!'}</p>`;
                        logActivity(currentLang === 'id' ? 'Kalibrasi sensor pH selesai.' : 'pH sensor calibration completed.');
                        setTimeout(() => { bootstrap.Modal.getInstance(document.getElementById('calibModal')).hide(); showToast(currentLang === 'id' ? 'Kalibrasi sensor berhasil disimpan.' : 'Sensor calibration saved successfully.', 'success'); }, 1200);
                    }
                }, { once: true });
            }
            document.getElementById('wifiConnectBtn').addEventListener('click', () => {
                const ssid = document.getElementById('wifiSsid').value.trim();
                if (!ssid) { showToast(currentLang === 'id' ? 'SSID wajib diisi.' : 'SSID is required.', 'danger'); return; }
                document.getElementById('wifiSuccessMsg').style.display = 'block';
                logActivity((currentLang === 'id' ? 'Perangkat terhubung ke WiFi: ' : 'Device connected to WiFi: ') + ssid);
                setTimeout(() => bootstrap.Modal.getInstance(document.getElementById('wifiModal')).hide(), 1400);
            });

            /* ---------- Add pond / schedule modals ---------- */
            document.getElementById('addPondBtn').addEventListener('click', () => {
                const name = document.getElementById('newPondName').value.trim();
                if (!name) { showToast(currentLang === 'id' ? 'Nama kolam wajib diisi.' : 'Pond name is required.', 'danger'); return; }
                const fish = document.getElementById('newPondFish').value;
                const pond = mkPond(name, fish);
                PONDS.push(pond); persistPonds();
                logActivity((currentLang === 'id' ? 'Kolam baru ditambahkan: ' : 'New pond added: ') + name);
                showToast(currentLang === 'id' ? 'Kolam berhasil dibuat.' : 'Pond created successfully.', 'success');
                bootstrap.Modal.getInstance(document.getElementById('addPondModal')).hide();
                document.getElementById('newPondName').value = '';
                renderAllDynamic();
            });
            document.getElementById('addScheduleBtn').addEventListener('click', () => {
                const actSel = document.getElementById('newSchedActivity');
                const actKey = ['sched_feed', 'sched_water', 'sched_vitamin', 'sched_maint'][actSel.selectedIndex];
                const repSel = document.getElementById('newSchedRepeat');
                const repKey = ['sched_daily', 'sched_weekly', 'sched_once'][repSel.selectedIndex];
                SCHEDULES.push({ id: uid('sch'), activity: actKey, time: document.getElementById('newSchedTime').value, repeat: repKey });
                persistSchedules();
                showToast(currentLang === 'id' ? 'Jadwal berhasil disimpan.' : 'Schedule saved successfully.', 'success');
                bootstrap.Modal.getInstance(document.getElementById('scheduleModal')).hide();
                renderSchedule();
            });

            /* ---------- Profile ---------- */
            document.getElementById('saveProfileBtn').addEventListener('click', () => {
                const user = currentUser();
                if (user) {
                    user.name = document.getElementById('profileName').value.trim() || user.name;
                    setSession(user, !!localStorage.getItem(SESSION_KEY));
                    document.getElementById('userNameSmall').textContent = user.name;
                    document.getElementById('profileAvatar').textContent = user.name.charAt(0).toUpperCase();
                }
                document.getElementById('profileSavedMsg').style.display = 'inline';
                setTimeout(() => document.getElementById('profileSavedMsg').style.display = 'none', 2000);
                logActivity(currentLang === 'id' ? 'Profil diperbarui.' : 'Profile updated.');
            });

            /* ---------- Enter app ---------- */
            function enterApp(user) {
                document.getElementById('authScreen').style.display = 'none';
                document.getElementById('appShell').style.display = 'flex';
                document.getElementById('userNameSmall').textContent = user.name;
                document.getElementById('profileName').value = user.name;
                document.getElementById('profileEmail').value = user.email;
                document.getElementById('profileAvatar').textContent = (user.name || 'A').charAt(0).toUpperCase();
                renderActivityLog();
                applyI18n();
                startSimulation();
            }

            /* ---------- Init ---------- */
            (function init() {
                const savedTheme = localStorage.getItem('bsa_theme') || 'light';
                applyTheme(savedTheme);
                document.getElementById('langSelect').value = currentLang;
                applyI18n();
                const session = currentUser();
                if (session) { enterApp(session); }
            })();

        })();
    
