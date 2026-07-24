// TAB SYSTEM - Add this at the beginning
document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      
      // Hide all tabs
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Remove active class from all buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Show selected tab
      document.getElementById(tabName).classList.add('active');
      this.classList.add('active');
      
      // Scroll to top
      window.scrollTo(0, 0);
    });
  });
});

// ============================================================
// ALL ORIGINAL JAVASCRIPT CODE CONSOLIDATED BELOW
// ============================================================


const SERVER_LIST = [
  { icon: "appicon/Z.webp",  title: "LIÊN QUÂN MOBILE [VN]",        pkg: "com.garena.game.kgvn",       label: "1.58.1.2 | XAPK", link: "https://drive.google.com/uc?export=download&id=1qsw2kfcvjqMPhkjOguf8Snrhl7XnoaPC" },
  { icon: "appicon/GL.webp", title: "ARENA OF VALOR [GL]",          pkg: "com.ngame.allstar.eu",       label: "1.58.1.2 | XAPK", link: "https://drive.google.com/uc?export=download&id=1qtIX8Os7MmqvQQtr5DGYNEeyS3FXYj48" },
  { icon: "appicon/TH.webp", title: "REALM OF VALOR [TH]",          pkg: "com.garena.game.kgth",       label: "1.58.1.7 | XAPK", link: "https://drive.google.com/uc?export=download&id=1qiyhRDMCCsweJ9hUxcDGA3d4RNIaz9EE" },
  { icon: "appicon/Z.webp",  title: "傳說對決 [TW]",                 pkg: "com.garena.game.kgtw",       label: "1.59.1.1 | XAPK", link: "https://drive.google.com/uc?export=download&id=1qjyOCRN3lMyAG0KHeivOTwT01VYRTjg_" },
  { icon: "appicon/CN.webp", title: "先行服 [CN]",                   pkg: "com.tencent.ngame.chty",     label: "1.58.5.1 | APK",  link: "https://drive.google.com/uc?export=download&id=1qyFH_LJ61gsbzrn0JqjeVA2Y_hxQTQL7" },
  { icon: "appicon/JP.webp", title: "アリーナ・オブ・ヴァラー [JP]",   pkg: "com.tencent.ngjp",           label: "1.58.1.2 | XAPK", link: "https://drive.google.com/uc?export=download&id=1q0vR8ofZOzgNubMh4tZ4euAYC3fgiM7T" },
  { icon: "appicon/ID.webp", title: "ARENA OF VALOR [ID]",          pkg: "com.garena.game.kgid",       label: "1.59.1.3 | XAPK", link: "https://drive.google.com/uc?export=download&id=1qWVLnuzvFdVENNlrSpvkKzPDcGVdy8bu" },
  { icon: "appicon/KR.webp", title: "펜타스톰 [KR]",                  pkg: "com.netmarble.pentastorm",   label: "Ngừng phát hành", link: null }
];

/* --- 2. Các mục MENU chính. type quyết định cách dựng:
      "action" = có id để JS khác gắn sự kiện (donate/chonmod/splash/server)
      "link"   = mục bấm mở link ngoài (lặp nhiều nhất -> lợi nhất khi gom data)
      "inner"  đi kèm khi mục cần chứa HTML con đặc biệt.                     --- */
const MENU_ITEMS = [
  { type: "action", id: "donate-item", icon: "icons/mb.png", title: "DONATE",
    sub: "Donate cho admin để ra mod nhanh hơn🐧" },

  { type: "action", id: "chonmod", icon: "icons/chonmod.png", title: "CHỌN MOD",
    sub: "Click để chọn một bản mod",
    inner: `<div class="skin-list" id="skin-list"></div>` },

  { type: "link", icon: "icons/caimod.png", title: "HƯỚNG DẪN CÀI MOD [iOS]",
    sub: "Click để xem hướng dẫn cài mod iOS", href: "https://youtu.be/TxR--AG0fuU" },

  { type: "link", icon: "icons/caimod.png", title: "HƯỚNG DẪN CÀI MOD [Android]",
    sub: "Click để xem hướng dẫn cài mod Android", href: "https://youtu.be/0j0pVny0ibI" },

  { type: "link", icon: "icons/res.png", title: "RESOURCES 23thg7 [Android]",
    sub: "Click để tải", href: "https://drive.google.com/file/d/1eM8AYayFe8n3_WAhtAQ2E-PNHz6nbw-w/view?usp=drivesdk" },

  { type: "action", id: "open-splash", icon: "icons/image.png", title: "THƯ VIỆN SPLASH ART AOV",
    sub: "Click để xem splash art (tốn nhiều dữ liệu, nên sử dụng wifi)",
    inner: `<div class="hidden" id="splash-container">
              <input id="search" placeholder="🔎 Tìm kiếm bằng id hoặc tên...">
              <div class="dat2" id="head-grid"></div>
            </div>` },

  { type: "action", id: "open-server-list", icon: "icons/aov.png", title: "DANH SÁCH MÁY CHỦ AOV",
    sub: "Click để xem hoặc tải APK/XAPK",
    inner: `<div class="menu3-list">${SERVER_LIST.map(serverItemHTML).join("")}</div>` },

  { type: "link", icon: "icons/congdong.png", title: "NHÓM CHAT ZALO",
    sub: "Click để tham gia nhóm chat", href: "https://zalo.me/g/twwfye619" },

  { type: "link", icon: "icons/16.png", title: "XOÁ LOGO 16+",
    sub: "Click để tải bản mod xoá logo 16+ (Android&iOS)", href: "https://drive.google.com/file/d/1rht8p-MieQLogikqKThyWyed9f9xDe4O/view?usp=drivesdk" }
];

/* --- 3. KHUÔN (template) — viết 1 lần, dùng cho mọi mục --- */
function serverItemHTML(s) {
  const dataLink = s.link ? ` data-link="${s.link}"` : "";
  return `<div class="menu3-item"${dataLink}>
    <img class="icon-img2" src="${s.icon}" loading="lazy" alt="">
    <div class="text">
      <strong>${s.title}</strong>
      <small>${s.pkg}</small>
      <div class="label-top-right">${s.label}</div>
    </div>
  </div>`;
}

function menuItemHTML(item) {
  const idAttr = item.id ? ` id="${item.id}"` : "";
  const icon = `<img class="icon-img" src="${item.icon}" loading="lazy" alt="">`;
  if (item.type === "link") {
    return `<div class="menu-item"${idAttr}>
      ${icon}
      <div class="text">
        <a href="${item.href}" target="_blank" rel="noopener">
          <strong>${item.title}</strong>
          <small>${item.sub}</small>
        </a>
      </div>
    </div>`;
  }
  // type "action": mục có hành vi riêng (JS khác gắn theo id)
  return `<div class="menu-item"${idAttr}>
    ${icon}
    <div class="text">
      <strong>${item.title}</strong>
      <small>${item.sub}</small>
      ${item.inner || ""}
    </div>
  </div>`;
}

/* --- 4. DỰNG: đổ toàn bộ menu vào #menu-items (chạy khi script defer thực thi,
        DOM đã sẵn sàng, TRƯỚC các script khác nên chúng vẫn tìm thấy id) --- */
(function renderMenu() {
  const mount = document.getElementById("menu-items");
  if (!mount) return;
  mount.innerHTML = MENU_ITEMS.map(menuItemHTML).join("");
})();

const darkToggle = document.getElementById("darkModeToggle");
const body = document.body;


if (localStorage.getItem("darkMode") !== "disabled") {
  body.classList.add("dark-mode");
  darkToggle.checked = true;
} else {
  body.classList.remove("dark-mode");
  darkToggle.checked = false;
}

darkToggle.addEventListener("change", function() {
  if (this.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
const accounts = [
  { username: "Đạt Allain", password: "2251225122832257115300560086", expire: "1/1/2100" },
  { username: "Hiếu Gay", password: "5300720078228622762252007700380068007500", expire: "1/1/2100" },
  { username: "Nguyễn Văn Doanh", password: "52007822862276228800660053004300", expire: "1/1/2100" },
  { username: "Sinon", password: "008622512283228322260077004300660043", expire: "1/1/2100" },
  { username: "Page Ngu", password: "7500680078228622762284005300750038004300", expire: "1/1/2100" }
];
const matrix = ["dw2#p78E", "1i3g4Kyf", "uxoXbkUm", "HDtjWah0", "N5crInzG", "eOJC9SPB", "lVsvFA@Z", "LQqYT6RM", "/:.-_?"];

const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const submitLogin = document.getElementById("submitLogin");
const accountStatus = document.getElementById("accountStatus");
const memberStatus = document.getElementById("memberStatus");
const avatar = document.querySelector(".avatar");
const defaultAvatar = "img/default.png";
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("passwordInput");

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
}

function getDaysLeft(dateStr) {
  return Math.ceil((parseDate(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
}

function shuffleEncoded(encoded) {
  const mid = Math.floor(encoded.length / 2);
  return encoded.slice(mid) + encoded.slice(0, mid);
}

function unshuffleEncoded(shuffled) {
  const mid = Math.floor(shuffled.length / 2);
  return shuffled.slice(-mid) + shuffled.slice(0, -mid);
}

function decodeUserPassword(encoded) {
  const code = unshuffleEncoded(encoded);
  if (code.length % 4 !== 0) throw new Error("Code không hợp lệ");
  return code.match(/.{4}/g).map(c => {
    const row = 8 - parseInt(c[0]);
    const col = 8 - parseInt(c[1]);
    if (row < 0 || row > 7 || col < 0 || col > 7) throw new Error("Code sai");
    return matrix[row][col];
  }).join('');
}

function setAvatarClickable(enable) {
  if (enable) {
    avatar.style.cursor = "pointer";
    avatar.addEventListener("click", avatarClickHandler);
  } else {
    avatar.style.cursor = "default";
    avatar.removeEventListener("click", avatarClickHandler);
  }
}

function avatarClickHandler() {
  const savedUser = JSON.parse(localStorage.getItem("loggedUser"));
  if (!savedUser) return;
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      avatar.src = reader.result;
      localStorage.setItem(`avatar_${savedUser.username}`, reader.result);
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function renderUser(user) {
  const savedUser = user || JSON.parse(localStorage.getItem("loggedUser"));
  if (!savedUser) {
    accountStatus.textContent = "Hiện chưa đăng nhập";
    memberStatus.textContent = "Liên hệ admin để đăng kí";
    setAvatarClickable(false);
    avatar.src = defaultAvatar;
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    return;
  }
  
  avatar.src = localStorage.getItem(`avatar_${savedUser.username}`) || savedUser.avatar || defaultAvatar;
  setAvatarClickable(true);
  
  const daysLeft = savedUser.expire ? getDaysLeft(savedUser.expire) : 0;
accountStatus.innerHTML = `Xin chào! ${
  savedUser.expire && daysLeft > 0
    ? `<span class="vip">${savedUser.username}</span>`
    : savedUser.username
}`;
if (savedUser.expire) {
  if (daysLeft > 0) {
    memberStatus.innerHTML = `<span style="color: gold;">
      Gói thành viên còn: ${daysLeft} ngày (${savedUser.expire})
    </span>`;
  } else {
    memberStatus.innerHTML = `<span style="color: red;">
      Gói thành viên: Đã hết hạn (${savedUser.expire})
    </span>`;
  }
} else {
  memberStatus.textContent = "Gói thành viên: Không";
}
  
  memberStatus.classList.toggle("member-vip", daysLeft > 0);
  accountStatus.classList.add("show");
  memberStatus.classList.add("show");
  
  loginBtn.style.display = "none";
  logoutBtn.style.display = "inline-block";
}

function login(username, password) {
  const user = accounts.find(acc => acc.username === username);
  if (!user) return alert("Sai tài khoản hoặc mật khẩu!");
  try {
    if (decodeUserPassword(user.password) === password) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      renderUser(user);
      loginModal.classList.remove("show");
      showToast("Đăng nhập thành công!");
    } else alert("Sai tài khoản hoặc mật khẩu!");
  } catch (e) {
    console.error(e);
    alert("Sai tài khoản hoặc mật khẩu!");
  }
}

loginBtn.addEventListener("click", () => loginModal.classList.add("show"));
submitLogin.addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;
  login(username, password);
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedUser");
  avatar.src = defaultAvatar;
  setAvatarClickable(false);
  accountStatus.textContent = "Hiện chưa đăng nhập";
  memberStatus.textContent = "Chưa có tài khoản? Liên hệ admin để đăng kí";
  memberStatus.classList.remove("member-vip");
  loginBtn.style.display = "inline-block";
  logoutBtn.style.display = "none";
});

togglePassword.addEventListener("click", () => {
  const isPwd = passwordInput.type === "password";
  passwordInput.type = isPwd ? "text" : "password";
  togglePassword.style.color = isPwd ? "#1e90ff" : "#ccc";
});

loginModal.addEventListener("click", e => {
  if (e.target === loginModal) loginModal.classList.remove("show");
});

window.addEventListener("load", () => {
  const savedUser = JSON.parse(localStorage.getItem("loggedUser"));
  if (savedUser) renderUser(savedUser);
  else setAvatarClickable(false);
});



document.getElementById("chonmod").onclick = function () {
    fetch("mod.js", {
        cache: "no-store"
    })
    .then(res => res.text())
    .then(code => {
        eval(code);
    });
};
const skins = [
{
champion: "Wiro",
name: "Mặc định",
label: "#Cài 1 lần, dùng đến khi game sập",
bgImg: "img/19400.jpg",
miniImg: "img/301940head.jpg",
videoPreview: "video/wiro.mp4",
desc: "Effects - Sound - Button - Notify",
color: "255, 200, 50",
Android: "https://link4m.com/HP8hrEE",
IOS: "https://link4m.com/HP8hrEE",
Android2: "26110800671160060036480164222980586456068225152254312327406152075906786381003604023246274735162277111713730462506145533342643800141344104146195057764340806220827085726218607643750034553565690174862850068003040780046271202760318079504553300009431382125063334961334501325126058155253707658011636663395710112222248025173210504168502142",
	IOS2: "56105205354457410680101125177085641538460800195049066580232768503210537421420943261117130232690130000581542778630462748622224051013260158062590211634635810055411413396500360304416413821622712050214316186007804204730476432980276075001522666328503373371047546307248082257950208272625176456331804846442161151250367167117711585434516260",
}
];
const openServer = document.getElementById('open-server-list');
const menuList = openServer.querySelector('.menu3-list');
openServer.addEventListener('click', function(e) {
  e.stopPropagation();
  menuList.classList.toggle('show');
});
menuList.addEventListener('click', function(e) {
  e.stopPropagation();
});
document.addEventListener('click', function(e) {
  menuList.classList.remove('show');
});
  document.querySelectorAll('.menu3-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.currentTarget === item) {
        const link = item.getAttribute('data-link');
        if (link) window.open(link, '_blank');
      }
    });
  });
window.heroSkinShop = [
    {
        "ID": 12106,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 19109,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 19009,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 19611,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 19312,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 15610,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 17708,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 12104,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 59801,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53207,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 53606,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 17512,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 52208,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 12609,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50311,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 13408,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 53204,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 52009,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 10620,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 15015,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 52113,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 11009,
        "LimitLabelPicUrl": "11009_1.png"
    },
    {
        "ID": 11107,
        "LimitLabelPicUrl": "11107_1.png"
    },
    {
        "ID": 18610,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 54805,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 15606,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50808,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10714,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 50120,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 52013,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 13613,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 51813,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13604,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 14106,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 53305,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 14201,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 52010,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 16806,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15216,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 18714,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 50105,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 11808,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 54503,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 53706,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 14115,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 52408,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 16205,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 51810,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 54603,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 54102,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 54103,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50119,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 16611,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 50117,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 11616,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 10912,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 14117,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 52709,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 50208,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17407,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 14402,
        "LimitLabelPicUrl": "14402_2.png"
    },
    {
        "ID": 13118,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 59901,
        "LimitLabelPicUrl": "T25limited.png"
    },
    {
        "ID": 10915,
        "LimitLabelPicUrl": "T25limited.png"
    },
    {
        "ID": 59802,
        "LimitLabelPicUrl": "T25limited.png"
    },
    {
        "ID": 14111,
        "LimitLabelPicUrl": "14111_1.png"
    },
    {
        "ID": 12101,
        "LimitLabelPicUrl": "12101_2.png"
    },
    {
        "ID": 12406,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52507,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19110,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 54206,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13611,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 53205,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13313,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 51306,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 53304,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 50111,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 51504,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 19609,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 11212,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 19013,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 54802,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 16711,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 15005,
        "LimitLabelPicUrl": "Label_AIC_2018_new.png"
    },
    {
        "ID": 13307,
        "LimitLabelPicUrl": "Label_AIC_2019_new.png"
    },
    {
        "ID": 16203,
        "LimitLabelPicUrl": "16203_1.png"
    },
    {
        "ID": 15006,
        "LimitLabelPicUrl": "Label_AWC_ADC.png"
    },
    {
        "ID": 15013,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 19509,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 51014,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 53309,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 15902,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14212,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 17106,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 51208,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 16712,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 12812,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 13017,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52111,
        "LimitLabelPicUrl": "52111_2.png"
    },
    {
        "ID": 12912,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 13116,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 15704,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 18703,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 13205,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 52006,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 13013,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 18609,
        "LimitLabelPicUrl": "18609_1.png"
    },
    {
        "ID": 50905,
        "LimitLabelPicUrl": "50905_1.png"
    },
    {
        "ID": 54505,
        "LimitLabelPicUrl": "54505_1.png"
    },
    {
        "ID": 59701,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 12606,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 15412,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 12706,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 54005,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15406,
        "LimitLabelPicUrl": "missaov.png"
    },
    {
        "ID": 52404,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 18708,
        "LimitLabelPicUrl": "18708_3.png"
    },
    {
        "ID": 52706,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 52602,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 51812,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14213,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 11903,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 17505,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 10604,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 50305,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 51003,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 14105,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 14611,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14411,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19904,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 51303,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 15009,
        "LimitLabelPicUrl": "15009_1.png"
    },
    {
        "ID": 56703,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 10506,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 12608,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 54307,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 15901,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 51109,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53310,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51907,
        "LimitLabelPicUrl": "51907_3.png"
    },
    {
        "ID": 50604,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 15611,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 13015,
        "LimitLabelPicUrl": "13015_1.png"
    },
    {
        "ID": 15205,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 15202,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 51911,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11115,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 19012,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 14110,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 11614,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 15211,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 12607,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50610,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 13609,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 20601,
        "LimitLabelPicUrl": "20600_1.png"
    },
    {
        "ID": 15402,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 16703,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 16706,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 16707,
        "LimitLabelPicUrl": "Awake_Label_1.png"
    },
    {
        "ID": 16710,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 15213,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51508,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 20600,
        "LimitLabelPicUrl": "20600_1.png"
    },
    {
        "ID": 10708,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 13208,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 15708,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 53902,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 52304,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 53705,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 53903,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 53904,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 54202,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 13209,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 13903,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 56701,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 52607,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12806,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 51405,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14908,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13705,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 51305,
        "LimitLabelPicUrl": "51305_2.png"
    },
    {
        "ID": 53802,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 52008,
        "LimitLabelPicUrl": "52008_1.png"
    },
    {
        "ID": 50505,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13109,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 12809,
        "LimitLabelPicUrl": "12809_3.png"
    },
    {
        "ID": 11906,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 18408,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 53110,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53703,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 17309,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 10907,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 12105,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53707,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 11618,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 56801,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17517,
        "LimitLabelPicUrl": "17517_1.png"
    },
    {
        "ID": 53406,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50108,
        "LimitLabelPicUrl": "50108_1.png"
    },
    {
        "ID": 14210,
        "LimitLabelPicUrl": "14210_1.png"
    },
    {
        "ID": 52203,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50207,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 18406,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 11816,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 16906,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11102,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11602,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11801,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 10501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 10601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 12401,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 12601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13002,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 14101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 14601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 14801,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 14901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 15702,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 16201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 16301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 16601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 16901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 17001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 17502,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11402,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11701,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13402,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 12804,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 14203,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 16701,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 16802,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 17101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50302,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 12102,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 17701,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 18001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 18601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 18701,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 19301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50801,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51401,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 19001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 19602,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51801,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52701,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 10502,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 15401,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 18901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 19201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 19501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52401,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52801,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52601,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 16903,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 19101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 14401,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 15003,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 10704,
        "LimitLabelPicUrl": "Label_AWC_new.png"
    },
    {
        "ID": 12703,
        "LimitLabelPicUrl": "Label_Hallween_new.png"
    },
    {
        "ID": 14403,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 16202,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 17501,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 50303,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11704,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 13504,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 16302,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 12003,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 12805,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 17303,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11603,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11203,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 10904,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11902,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 13304,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 13603,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 15001,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 10802,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 12301,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 11103,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11003,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 50102,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 14102,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 14204,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 17102,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11502,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 14602,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 12802,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11605,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 13004,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 51002,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 15703,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 10902,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 11803,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 13102,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 50602,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 16603,
        "LimitLabelPicUrl": "Label_Valentine_new.png"
    },
    {
        "ID": 50103,
        "LimitLabelPicUrl": "Label_Valentine_new.png"
    },
    {
        "ID": 12603,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 16803,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 14905,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 50803,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 16605,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 52702,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 19302,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 51402,
        "LimitLabelPicUrl": "Label_Valentine_new.png"
    },
    {
        "ID": 17702,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 50202,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 11503,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 14405,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 15603,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 13010,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11109,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 17305,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 12908,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 17507,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 53202,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 14208,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 11604,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 13302,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 19002,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 11202,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 13005,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 14104,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 15705,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 51802,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 19603,
        "LimitLabelPicUrl": "Label_Valentine_new.png"
    },
    {
        "ID": 12309,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 10809,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 12304,
        "LimitLabelPicUrl": "Label_SS_limited.png"
    },
    {
        "ID": 11809,
        "LimitLabelPicUrl": "T35DirectSale.png"
    },
    {
        "ID": 16308,
        "LimitLabelPicUrl": "16308_2.png"
    },
    {
        "ID": 14904,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 11706,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13210,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 54403,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 19102,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 50112,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 50611,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 50612,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 52506,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12906,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 17403,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17404,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 10711,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15604,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 17401,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17402,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 19205,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14206,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 53509,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 16805,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 54203,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 54504,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 14610,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12008,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 19004,
        "LimitLabelPicUrl": "19004_1.png"
    },
    {
        "ID": 12904,
        "LimitLabelPicUrl": "12904_1.png"
    },
    {
        "ID": 13204,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 50802,
        "LimitLabelPicUrl": "Label_2st_Anniversary.png"
    },
    {
        "ID": 13404,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 52002,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 19310,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52703,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 11206,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 11607,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 51808,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 16607,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 12308,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52708,
        "LimitLabelPicUrl": "52708_1.png"
    },
    {
        "ID": 51909,
        "LimitLabelPicUrl": "51909_1.png"
    },
    {
        "ID": 19014,
        "LimitLabelPicUrl": "19014_1.png"
    },
    {
        "ID": 12810,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 52609,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15304,
        "LimitLabelPicUrl": "15304_1.png"
    },
    {
        "ID": 13608,
        "LimitLabelPicUrl": "13608_3.png"
    },
    {
        "ID": 52410,
        "LimitLabelPicUrl": "52410_3.png"
    },
    {
        "ID": 11802,
        "LimitLabelPicUrl": "11802_3.png"
    },
    {
        "ID": 16609,
        "LimitLabelPicUrl": "16609_3.png"
    },
    {
        "ID": 15710,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 10505,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13704,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 50116,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 19204,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15007,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 12907,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 18006,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 54006,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13011,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 11113,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 11303,
        "LimitLabelPicUrl": "Label_rankS6.png"
    },
    {
        "ID": 15305,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 53109,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19010,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 51302,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 18604,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 50309,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 52007,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 15303,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15301,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15302,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 19605,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 11807,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 52305,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17308,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 13211,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 11304,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12901,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 11208,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 15008,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 53105,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 14804,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11905,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 13115,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 13607,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19007,
        "LimitLabelPicUrl": "T2limited.png"
    },
    {
        "ID": 10607,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 50110,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 51807,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 15709,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14109,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 10701,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10805,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10901,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11001,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12103,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 12302,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12303,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 12305,
        "LimitLabelPicUrl": "Label_Hallween_limited_new.png"
    },
    {
        "ID": 12403,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 12807,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13003,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13006,
        "LimitLabelPicUrl": "Label_SS_chroma_new.png"
    },
    {
        "ID": 13008,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 13106,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13107,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 13108,
        "LimitLabelPicUrl": "Label_SS_chroma_new.png"
    },
    {
        "ID": 13202,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 14107,
        "LimitLabelPicUrl": "Label_SS_chroma_new.png"
    },
    {
        "ID": 14603,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 15002,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15203,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15206,
        "LimitLabelPicUrl": "Label_Hallween_limited_new.png"
    },
    {
        "ID": 16303,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 16602,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 16702,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 16704,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 16705,
        "LimitLabelPicUrl": "Label_SS_chroma_new.png"
    },
    {
        "ID": 16904,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17002,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 17301,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17705,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 18004,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 18704,
        "LimitLabelPicUrl": "Label_SS_chroma_new.png"
    },
    {
        "ID": 18706,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 18902,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19006,
        "LimitLabelPicUrl": "Label_SS_chroma_new.png"
    },
    {
        "ID": 19601,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19604,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 19606,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50902,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51005,
        "LimitLabelPicUrl": "Label_SS_chroma_new.png"
    },
    {
        "ID": 52003,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52004,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52102,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 52302,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 52402,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 52502,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52902,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 53803,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52705,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 15706,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 52405,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 51204,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11007,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 54304,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10705,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 11207,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 13308,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 52403,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 16304,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 11110,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 12005,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 18702,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 50502,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 50605,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 51004,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 51502,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 51803,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 51903,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 11211,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10602,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 54801,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 14114,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 50903,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15207,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53405,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 19105,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10807,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 14209,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 53507,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11810,
        "LimitLabelPicUrl": "11810_2.png"
    },
    {
        "ID": 13606,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52707,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50503,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 14207,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 13206,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 13009,
        "LimitLabelPicUrl": "Label_Valentine_new.png"
    },
    {
        "ID": 51105,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10608,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 13110,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 15407,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 50608,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 11116,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 54101,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 50206,
        "LimitLabelPicUrl": "50206_1.png"
    },
    {
        "ID": 13702,
        "LimitLabelPicUrl": "Label_A_new.png"
    },
    {
        "ID": 16606,
        "LimitLabelPicUrl": "Label_Splus.png"
    },
    {
        "ID": 53002,
        "LimitLabelPicUrl": "Label_Splus.png"
    },
    {
        "ID": 12910,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 16907,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 18403,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11404,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11108,
        "LimitLabelPicUrl": "Label_LNY_Chroma_new.png"
    },
    {
        "ID": 14906,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 13309,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 53502,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 53402,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 19307,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12405,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 17508,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17506,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 11806,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 53103,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 15410,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 15408,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 18007,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 14002,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 50401,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 50701,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 19505,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 18903,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53404,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10804,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 19305,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 53302,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 13113,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 19504,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13104,
        "LimitLabelPicUrl": "Label_SS_limited.png"
    },
    {
        "ID": 54601,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 15608,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12306,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19202,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 11005,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50205,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15208,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 16306,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 51102,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 54401,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 10801,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 53303,
        "LimitLabelPicUrl": "Label_rankS16.png"
    },
    {
        "ID": 51804,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 15403,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 14406,
        "LimitLabelPicUrl": "Label_A_new.png"
    },
    {
        "ID": 17504,
        "LimitLabelPicUrl": "T35limited.png"
    },
    {
        "ID": 13207,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11209,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51006,
        "LimitLabelPicUrl": "Label_Splus.png"
    },
    {
        "ID": 18705,
        "LimitLabelPicUrl": "Label_Splus.png"
    },
    {
        "ID": 13605,
        "LimitLabelPicUrl": "Label_A_new.png"
    },
    {
        "ID": 14108,
        "LimitLabelPicUrl": "Label_Splus.png"
    },
    {
        "ID": 51904,
        "LimitLabelPicUrl": "Label_Splus.png"
    },
    {
        "ID": 50204,
        "LimitLabelPicUrl": "Label_A_new.png"
    },
    {
        "ID": 10503,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10603,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 10605,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 10609,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10706,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10707,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10803,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 10905,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 11004,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 11101,
        "LimitLabelPicUrl": "Label_LNY_new.png"
    },
    {
        "ID": 11105,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 11106,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11111,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11112,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11205,
        "LimitLabelPicUrl": "Label_SS_limited.png"
    },
    {
        "ID": 11403,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11601,
        "LimitLabelPicUrl": "Label_LNY_new.png"
    },
    {
        "ID": 11606,
        "LimitLabelPicUrl": "Label_Christmas_new.png"
    },
    {
        "ID": 11608,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 11610,
        "LimitLabelPicUrl": "Label_SS_limited.png"
    },
    {
        "ID": 11611,
        "LimitLabelPicUrl": "53702_2.png"
    },
    {
        "ID": 11613,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 11703,
        "LimitLabelPicUrl": "Label_Christmas_new.png"
    },
    {
        "ID": 11804,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 11805,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12001,
        "LimitLabelPicUrl": "Label_LNY_new.png"
    },
    {
        "ID": 12002,
        "LimitLabelPicUrl": "Mina_VN_tag.png"
    },
    {
        "ID": 12004,
        "LimitLabelPicUrl": "Label_Hallween_limited_new.png"
    },
    {
        "ID": 12006,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 12402,
        "LimitLabelPicUrl": "Label_rankS10.png"
    },
    {
        "ID": 12602,
        "LimitLabelPicUrl": "Label_rankS12.png"
    },
    {
        "ID": 12702,
        "LimitLabelPicUrl": "Label_rankS3.png"
    },
    {
        "ID": 12801,
        "LimitLabelPicUrl": "T3DirectSale.png"
    },
    {
        "ID": 12803,
        "LimitLabelPicUrl": "Label_LNY_new.png"
    },
    {
        "ID": 12902,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 12903,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 12905,
        "LimitLabelPicUrl": "Label_rankS4.png"
    },
    {
        "ID": 13001,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 13007,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13012,
        "LimitLabelPicUrl": "Label_rankS17.png"
    },
    {
        "ID": 13103,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 13105,
        "LimitLabelPicUrl": "Label_Football_new.png"
    },
    {
        "ID": 13203,
        "LimitLabelPicUrl": "Label_Valentine_new.png"
    },
    {
        "ID": 13301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13305,
        "LimitLabelPicUrl": "Label_rankS7.png"
    },
    {
        "ID": 13306,
        "LimitLabelPicUrl": "Label_Football_new.png"
    },
    {
        "ID": 13310,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 13403,
        "LimitLabelPicUrl": "Label_rankS9.png"
    },
    {
        "ID": 13405,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13501,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 13503,
        "LimitLabelPicUrl": "Label_rankS2.png"
    },
    {
        "ID": 13701,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 13902,
        "LimitLabelPicUrl": "Label_rankS8.png"
    },
    {
        "ID": 14103,
        "LimitLabelPicUrl": "Label_Hallween_limited_new.png"
    },
    {
        "ID": 14202,
        "LimitLabelPicUrl": "Label_LNY_new.png"
    },
    {
        "ID": 14205,
        "LimitLabelPicUrl": "Label_Christmas_new.png"
    },
    {
        "ID": 14404,
        "LimitLabelPicUrl": "T3limited.png"
    },
    {
        "ID": 14604,
        "LimitLabelPicUrl": "T4DirectSale.png"
    },
    {
        "ID": 14605,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 14802,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 14902,
        "LimitLabelPicUrl": "Label_Football_new.png"
    },
    {
        "ID": 14903,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15033,
        "LimitLabelPicUrl": "Awake_Label_1.png"
    },
    {
        "ID": 15201,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15404,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15405,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15601,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 15602,
        "LimitLabelPicUrl": "Label_rankS5.png"
    },
    {
        "ID": 15605,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 16305,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 16307,
        "LimitLabelPicUrl": "Ultraman.png"
    },
    {
        "ID": 16604,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 16709,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 16902,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 17103,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 17302,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17304,
        "LimitLabelPicUrl": "Label_Christmas_new.png"
    },
    {
        "ID": 17306,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 17503,
        "LimitLabelPicUrl": "Label_Christmas_new.png"
    },
    {
        "ID": 17703,
        "LimitLabelPicUrl": "Label_rankS11.png"
    },
    {
        "ID": 17704,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 18002,
        "LimitLabelPicUrl": "Label_Football_new.png"
    },
    {
        "ID": 18003,
        "LimitLabelPicUrl": "Label_rankS13.png"
    },
    {
        "ID": 18401,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 18402,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 18603,
        "LimitLabelPicUrl": "Label_rankS14.png"
    },
    {
        "ID": 18605,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19003,
        "LimitLabelPicUrl": "Label_Football_new.png"
    },
    {
        "ID": 19005,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19008,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19303,
        "LimitLabelPicUrl": "Label_SS_limited.png"
    },
    {
        "ID": 19304,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 19502,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 19503,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 19902,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 19903,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50104,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 50106,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 50107,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50203,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 50304,
        "LimitLabelPicUrl": "Label_LNY_new.png"
    },
    {
        "ID": 50306,
        "LimitLabelPicUrl": "Label_S_Limited.png"
    },
    {
        "ID": 50307,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50504,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 50603,
        "LimitLabelPicUrl": "Label_S_Limited.png"
    },
    {
        "ID": 50606,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51008,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51104,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51202,
        "LimitLabelPicUrl": "T5limited.png"
    },
    {
        "ID": 51203,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 51403,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51404,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 51503,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 51805,
        "LimitLabelPicUrl": "Label_A_new.png"
    },
    {
        "ID": 51806,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 51902,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 52103,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52104,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52105,
        "LimitLabelPicUrl": "Ultraman.png"
    },
    {
        "ID": 52202,
        "LimitLabelPicUrl": "T5DirectSale.png"
    },
    {
        "ID": 52303,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 52503,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52603,
        "LimitLabelPicUrl": "Label_A_Limited.png"
    },
    {
        "ID": 52704,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 52802,
        "LimitLabelPicUrl": "Label_Splus_limit.png"
    },
    {
        "ID": 52901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 52903,
        "LimitLabelPicUrl": "T4limited.png"
    },
    {
        "ID": 52904,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 53101,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 53102,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53104,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 53301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 53307,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53401,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 53501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 53601,
        "LimitLabelPicUrl": "T6limited.png"
    },
    {
        "ID": 53701,
        "LimitLabelPicUrl": "Label_SS_limited.png"
    },
    {
        "ID": 53702,
        "LimitLabelPicUrl": "53702_2.png"
    },
    {
        "ID": 53801,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 53901,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 54001,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 54201,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 54301,
        "LimitLabelPicUrl": "T6DirectSale.png"
    },
    {
        "ID": 54501,
        "LimitLabelPicUrl": "T6DirectSale.png"
    }
];
const skinData = {
  "10500": "Mặc định",
  "10501": "Đặc cảnh NYPD",
  "10502": "Trung phong cắm",
  "10503": "Thần thoại Hy Lạp",
  "10504": "Ngưu hải vương",
  "10505": "Bạch mao ngưu",
  "10506": "Tử Lôi Thần Ngưu",
  "10507": "Hiểm họa hỗn mang",
  "10600": "Mặc định",
  "10601": "Công chúa bướm",
  "10602": "Xứ sở thần tiên",
  "10603": "Tiệc bãi biển",
  "10604": "Cô tiên thỏ",
  "10605": "Phó văn nghệ",
  "10606": "Tiểu yêu nữ",
  "10607": "Hồ thiên nga",
  "10608": "Thần thoại Hy Lạp",
  "10609": "Thủy thủ",
  "10611": "Lốc xoáy kinh hoàng Tatsumaki",
  "10613": "Nàng tiên nổi loạn",
  "10615": "Tiểu hồng mai",
  "10617": "Quán quân",
  "10620": "Phù thủy thời không",
  "10621": "Uyên Ương mộng điệp",
  "10700": "Mặc định",
  "10701": "Oán linh",
  "10703": "Hiệp sĩ bí ngô",
  "10704": "Dung nham",
  "10705": "Siêu việt",
  "10706": "Phi thương",
  "10707": "Tư lệnh viễn chinh",
  "10708": "Hắc vô thường",
  "10709": "Inosuke Hashibira",
  "10711": "Đầu bếp Sashimi",
  "10712": "Nghệ nhân đồ chơi",
  "10714": "Kỷ Nguyên Hổ Phách",
  "10800": "Mặc định",
  "10801": "Tiệc bãi biển",
  "10802": "Phượt thủ",
  "10803": "Đại gia học viện",
  "10804": "Đại võ sư",
  "10805": "Thuyền trưởng râu bạc",
  "10806": "Bác học thiên tài",
  "10807": "Phù thủy Ba Tư",
  "10809": "Xích Long",
  "10900": "Mặc định",
  "10901": "Cô giáo hắc ám",
  "10902": "Góa phụ giả kim",
  "10903": "Nàng dơi tuyết",
  "10904": "Y tá bạo loạn",
  "10905": "Thiên nga đen",
  "10906": "Vũ hội bóng đêm",
  "10907": "Kimono",
  "10908": "Vũ điệu samba",
  "10910": "Đánh cắp trái tim",
  "10911": "Dơi hắc ám",
  "10912": "A.I love you",
  "10913": "Bách hoa tiên nữ",
  "10914": "Phù thủy Hội họa",
  "10915": "Thất Sát - Thượng Sinh",
  "11000": "Mặc định",
  "11001": "Cô dâu hắc ám",
  "11003": "Quàng khăn đỏ",
  "11004": "Kim cô giáo chủ",
  "11005": "Siêu đầu bếp",
  "11006": "Vũ hội bóng đêm",
  "11007": "Tử Điệp",
  "11008": "Robot hộ lý",
  "11009": "Rối nước Thủy đình",
  "11010": "Linh Hoa thần nữ",
  "11100": "Mặc định",
  "11101": "Nữ hoàng pháo hoa",
  "11102": "Nữ đặc cảnh",
  "11103": "Phi công trẻ",
  "11104": "Mèo siêu quậy",
  "11105": "Tiệc bãi biển",
  "11106": "Phó học tập",
  "11107": "Thứ nguyên vệ thần",
  "11108": "Pháo hoa Neon",
  "11109": "Đặc dị",
  "11110": "Vợ người ta",
  "11111": "Tay súng siêu phàm",
  "11112": "Huy chương vàng",
  "11113": "Huyết ma thần",
  "11114": "Lam tước",
  "11115": "Thần Long tỷ tỷ",
  "11116": "DJ Câu hồn",
  "11117": "Bách hoa tiên nữ",
  "11119": "Vọng nguyệt Long Cơ",
  "11120": "Nobara Kugisaki",
  "11121": "Nữ quản thú",
  "11200": "Mặc định",
  "11201": "Cung thủ bóng đêm",
  "11202": "Thế tử nguyệt tộc",
  "11203": "Đặc nhiệm SWAT",
  "11204": "Phá Vân tiễn",
  "11205": "Long thần soái",
  "11206": "Nam thần giáng sinh",
  "11207": "Soái ca học đường",
  "11208": "Thần thoại Hy Lạp",
  "11209": "Lục nguyệt cung",
  "11211": "Soái ca bãi biển",
  "11212": "Vệ Binh ngân hà",
  "11213": "Giao long",
  "11214": "Ký giả diệu kỳ",
  "11215": "Conan Edogawa",
  "11300": "Mặc định",
  "11301": "Ác mộng sinh hóa",
  "11302": "Quang vinh",
  "11303": "Quang vinh",
  "11304": "Quân cảnh",
  "11400": "Mặc định",
  "11401": "Hộ vệ ba bích",
  "11402": "Người máy xanh",
  "11403": "Cỗ máy siêu tốc",
  "11404": "Hộ vệ ba bích",
  "11405": "Hộ vệ Carano",
  "11406": "Sứ Thanh Hoa",
  "11500": "Mặc định",
  "11501": "Đại tư tế",
  "11502": "Dạ xoa vương",
  "11503": "Hỏa nhãn ma vương",
  "11504": "Kim quang thánh đồ",
  "11506": "Kim giác",
  "11507": "Ma thuật sĩ",
  "11600": "Mặc định",
  "11601": "Xuân nữ ngổ ngáo",
  "11602": "Thủy thủ",
  "11603": "Teen nữ công nghệ",
  "11604": "Nữ quái nổi loạn",
  "11605": "Quận chúa đế chế",
  "11606": "Đông êm đềm",
  "11607": "Phượng cửu thiên",
  "11608": "Cẩm y vệ: Chu tước",
  "11610": "Asuna Tia Chớp",
  "11611": "Stacia",
  "11613": "Gánh anh đến cùng",
  "11614": "Kim Ngư thần nữ",
  "11616": "Nữ thần Khởi nguyên",
  "11618": "Tình yêu nổi loạn",
  "11619": "Rockgirl Siêu Đẳng",
  "11620": "Bình Minh Tận Thế",
  "11700": "Mặc định",
  "11701": "Cựu chiến binh",
  "11703": "Thông thỏa thích",
  "11704": "Giáo viên thể hình",
  "11705": "Ông chủ KFC",
  "11706": "CĐV Cuồng nhiệt",
  "11707": "Quỷ vệ",
  "11800": "Mặc định",
  "11801": "Nhà chiêm tinh",
  "11802": "Phi hành gia",
  "11803": "Bé gấu tuyết",
  "11804": "Xứ sở thần tiên",
  "11805": "Dạ hội",
  "11806": "Tiểu quỷ bí ngô",
  "11807": "Bé du xuân",
  "11808": "Quân nhạc Athanor",
  "11809": "Tiểu tiên tử",
  "11810": "The Butterfly Mansion Girl",
  "11811": "Phi hành gia",
  "11812": "Eternal Sailor Chibi Moon",
  "11816": "Xứ sở diệu kỳ",
  "11817": "Ốc quế tinh nghịch",
  "11900": "Mặc định",
  "11901": "Hề cung đình",
  "11902": "Tiệc bánh kẹo",
  "11903": "Pháp sư mèo",
  "11904": "Nhà hóa học",
  "11905": "Độc toàn thân",
  "11906": "Quái tặc không gian",
  "11907": "Đèn Thần Hậu Đậu",
  "11908": "Doombot hủy diệt",
  "12000": "Mặc định",
  "12001": "Tiểu thư đoạt hồn",
  "12002": "Chị đại lắm chiêu",
  "12003": "Tiệc bánh kẹo",
  "12004": "Kẹo hay ghẹo",
  "12005": "Lưỡi hái hoàng kim",
  "12006": "Đào tạo siêu sao",
  "12007": "Nữ thần Ai Cập",
  "12008": "Linh xà Yêu vũ",
  "12011": "Xích Huyết Diễm Quỷ",
  "12012": "Cẩm y vệ Kim Ô",
  "12100": "Mặc định",
  "12101": "Lam Hải yêu hậu",
  "12102": "Linh xà tư tế",
  "12103": "Hỏa ngọc nữ vương",
  "12104": "Yêu nữ săn mồi",
  "12105": "Chủ hôn",
  "12106": "Phù Quang Mạc Ảnh",
  "12300": "Mặc định",
  "12301": "Ác ma địa ngục",
  "12302": "Tiệc hóa trang",
  "12303": "Samurai tử sĩ",
  "12304": "Đại tướng Rô bốt",
  "12305": "Ông kẹ bí ngô",
  "12306": "Ác nhân vô tuyến",
  "12307": "Vũ hội bóng đêm",
  "12308": "Đại ca Mukbang",
  "12309": "Quỷ nhãn ma thể",
  "12310": "Đao phủ Dạ Ưng",
  "12400": "Mặc định",
  "12401": "Hỏa thuật sư",
  "12402": "Quang vinh",
  "12403": "Bắc băng vương",
  "12404": "Thầy tế mặt trời",
  "12405": "Thần mặt trời",
  "12406": "Nguyệt lão",
  "12407": "Vì sao con khóc",
  "12600": "Mặc định",
  "12601": "Cận vệ hoàng gia",
  "12602": "Quang vinh",
  "12603": "Tà linh hiệp sỹ",
  "12604": "Chiến binh cổ đại",
  "12605": "Đường vào tim em",
  "12606": "Bạch vệ chiến giáp",
  "12607": "Organ cổ quái",
  "12608": "Ngạo Hổ Hàn Đao",
  "12609": "Nhà vô địch",
  "12700": "Mặc định",
  "12701": "Hoàng tử cát",
  "12702": "Linh hồn lữ khách",
  "12703": "Ghẹo hay kẹo",
  "12704": "Quỷ diện lãng khách",
  "12705": "Quang vinh 2.0",
  "12706": "Giáng sinh An lành",
  "12800": "Mặc định",
  "12801": "Tiệc bãi biển",
  "12802": "Nam vương",
  "12803": "Long kỵ sĩ",
  "12804": "Kỵ sĩ âm phủ",
  "12805": "Đặc nhiệm SWAT",
  "12806": "Tư lệnh Robot",
  "12807": "Hỏa long chiến thần",
  "12808": "Ichigo Kurosaki",
  "12809": "Thần ngọc",
  "12810": "Vũ điệu samba",
  "12812": "Cửu Thiên Lôi Thần",
  "12900": "Mặc định",
  "12901": "Tiến sĩ thiên tài",
  "12902": "Đoạt mệnh thương",
  "12903": "Quý công tử",
  "12904": "Dũng sĩ đồ long",
  "12905": "Quang vinh",
  "12906": "Chiến tướng mùa đông",
  "12907": "Kỵ sĩ tận thế",
  "12908": "Cẩm y vệ: Hỏa long",
  "12910": "Thần tài",
  "12912": "Minh Chung Long Đế",
  "12913": "Chiến Phủ Phần Nguyên",
  "13000": "Mặc định",
  "13001": "Thích khách",
  "13002": "Ninja xanh lá",
  "13003": "Quái xế công nghệ",
  "13004": "Cấm vệ nguyệt tộc",
  "13005": "Kiemono",
  "13006": "Bạch Kiemono",
  "13007": "Phó kiếm đạo",
  "13008": "Tiệc bãi biển",
  "13009": "Mỵ hồ",
  "13010": "Đặc công tử điệp",
  "13011": "Bích Hải thánh nữ",
  "13012": "Lễ hội mùa xuân",
  "13013": "Thánh nữ Xiêm La",
  "13015": "Thứ nguyên Vệ thần",
  "13017": "Ninja ẩm thực",
  "13018": "Búp bê Mộng mị",
  "13100": "Mặc định",
  "13101": "Thợ săn tiền thưởng",
  "13102": "M-TP Thần tượng học đường",
  "13103": "Đồ thần đao",
  "13104": "Siêu việt",
  "13105": "Thiên tài sân cỏ",
  "13106": "Điệp viên Anubis",
  "13107": "Đặc dị",
  "13108": "Siêu việt 2.0",
  "13109": "Chí tôn thần kiếm",
  "13110": "Dược sĩ tình yêu",
  "13111": "Byakuya Kuchiki",
  "13112": "Zenitsu Agatsuma",
  "13113": "Thích khách sa mạc",
  "13114": "S - Quang vinh",
  "13115": "Huyết hỏa cuồng đồ",
  "13116": "Tuyệt thế thần binh",
  "13117": "Chiến binh đồ chơi",
  "13118": "Thiên Luân Kiếm Thánh",
  "13200": "Mặc định",
  "13201": "Bạch ảnh",
  "13202": "Chiến binh trăng khuyết",
  "13203": "Ngân lang",
  "13204": "Tử thần vũ trụ",
  "13205": "Quỷ diện",
  "13206": "Kim ưng sát thủ",
  "13207": "Bạch lang",
  "13208": "Bạch vô thường",
  "13209": "Bóng người dưới trăng",
  "13210": "Tu Di thánh đế",
  "13211": "Mãnh hổ kim cang",
  "13212": "Thống soái Dạ Ưng",
  "13213": "Siêu đạo chích Kid",
  "13300": "Mặc định",
  "13301": "Hoàng tử quạ",
  "13302": "Vũ khí tối thượng",
  "13304": "Đại công tước",
  "13305": "Quang vinh",
  "13306": "Số 7 thần sầu",
  "13307": "Khiêu chiến",
  "13308": "Cá mập nghiêm túc",
  "13309": "Hoàng tử Băng",
  "13310": "Thần tài",
  "13311": "Xạ thần Kagutsuchi",
  "13312": "S - Quang vinh",
  "13313": "Đệ nhất thần thám",
  "13314": "Thứ nguyên vệ thần",
  "13315": "AW5",
  "13400": "Mặc định",
  "13402": "Sơn tặc",
  "13403": "Quang vinh",
  "13404": "Tà linh ma tướng",
  "13405": "Mafia",
  "13408": "Cứu hộ",
  "13409": "VĐV trượt ván",
  "13500": "Mặc định",
  "13501": "Kẻ hủy diệt",
  "13502": "Hiệp sĩ hoàng kim",
  "13503": "Quang vinh",
  "13504": "Mật vụ",
  "13505": "Bác ong bay vừa",
  "13506": "Khoảnh khắc vinh quang",
  "13600": "Mặc định",
  "13601": "Nữ chúa tuyết",
  "13602": "Thần mặt trời",
  "13603": "Hồng hoa hậu",
  "13604": "Thiên nữ Áo dài",
  "13605": "Nữ hoàng khí giới",
  "13606": "Diva nổi loạn",
  "13607": "Ngược dòng thời gian",
  "13608": "Quý cô nhà hát",
  "13609": "Khải Huyền Thiên Hậu",
  "13610": "Trọng tài",
  "13611": "Thụy Mộc liên hoa",
  "13612": "Nộ hải Thiên ngư",
  "13613": "Lưỡng Nghi Long Hậu",
  "13700": "Mặc định",
  "13701": "Khúc nhạc tử vong",
  "13702": "Phi vụ thế kỷ",
  "13703": "Công tước máu",
  "13704": "Ô Thước đại hiệp",
  "13705": "Tử xà bá tước",
  "13706": "Megumi Fushiguro",
  "13900": "Mặc định",
  "13901": "Cảnh vệ biển",
  "13902": "Quang vinh",
  "13903": "Chú lính chì",
  "13904": "Càn Nguyên thủ vệ",
  "14000": "Mặc định",
  "14001": "Chúa tể công lý",
  "14002": "Bất công lý",
  "14100": "Mặc định",
  "14101": "Đọa lạc thiên sứ",
  "14102": "Hỏa phượng hoàng",
  "14103": "Phù thủy bí ngô",
  "14104": "Thánh quang sứ",
  "14105": "Hoa khôi giáng sinh",
  "14106": "Lạc thần",
  "14107": "Tinh vân sứ",
  "14108": "Tiệc bãi biển",
  "14109": "Thiên sứ công nghệ",
  "14110": "Phi Thiên",
  "14111": "Thứ nguyên vệ thần",
  "14113": "Vũ khúc hân hoan",
  "14114": "Nữ vương học đường",
  "14115": "Đôi cánh Nguyệt thực",
  "14116": "Nữ vương học đường",
  "14117": "Vũ khúc miêu ảnh",
  "14118": "Thiên nữ Dạ Ưng",
  "14200": "Mặc định",
  "14201": "Mị muốn đi chơi",
  "14202": "Nghệ nhân lân",
  "14203": "Quý cô thủy tề",
  "14204": "Phó nháy nhí nhảnh",
  "14205": "Quà quái quỷ",
  "14206": "Nghiệp hỏa yêu hậu",
  "14207": "Băng tâm thần nữ",
  "14208": "Nữ quái công nghệ",
  "14209": "Nghệ sĩ ma mị",
  "14210": "Thần phú quý",
  "14212": "Biệt đội băng lam",
  "14213": "Nguyệt Ảnh Kiếm Tiên",
  "14400": "Mặc định",
  "14401": "Đại tù trưởng",
  "14402": "Lam Hải chiến nữ",
  "14403": "Hỏa ngọc nữ đế",
  "14404": "Tiệc bãi biển",
  "14405": "Hồng môn đường chủ",
  "14406": "Tư lệnh hải âu",
  "14407": "Nữ chiến binh",
  "14410": "Hoa hồng đỏ tươi",
  "14411": "Thần chiến tranh",
  "14600": "Mặc định",
  "14601": "Lốc địa ngục",
  "14602": "Dung nham",
  "14603": "Cựu thần thiên hà",
  "14604": "Diệt nguyệt tử sĩ",
  "14605": "Thần Mộng Mị",
  "14606": "Phong thần Tu La",
  "14610": "Quái xế",
  "14611": "Con quay gió",
  "14800": "Mặc định",
  "14801": "Không tặc",
  "14802": "Băng hỏa long sư",
  "14803": "Phi cơ F1",
  "14804": "Ma độc huyết long",
  "14805": "Bù nhìn xứ Athanor",
  "14900": "Mặc định",
  "14901": "Thiên sứ hủy diệt",
  "14902": "Trung vệ thép",
  "14903": "Kim sí điểu",
  "14904": "Ma sứ tận thế",
  "14905": "Tổng lãnh tinh hệ",
  "14906": "Thần thoại Hy Lạp",
  "14908": "Shipper bánh mỳ",
  "14909": "Hóa thân Tengu",
  "14910": "Tay trống ngang tàng",
  "14911": "Cấm vệ",
  "15000": "Mặc định",
  "15001": "Chiến binh hỏa ngục",
  "15002": "Quân đoàn địa ngục",
  "15003": "Bboy công nghệ",
  "15004": "Siêu việt",
  "15005": "Khiêu chiến",
  "15006": "Quán quân",
  "15007": "Lôi quang sứ",
  "15008": "Tiệc bãi biển",
  "15009": "Thứ nguyên vệ thần",
  "15012": "Killua",
  "15013": "Quỷ thương Liệp đế",
  "15014": "Producer Tia chớp",
  "15015": "Bạch Diện chiến thương",
  "15200": "Mặc định",
  "15201": "Nữ vương anh đào",
  "15202": "Tiệc bãi biển",
  "15203": "Nữ y tá",
  "15204": "WaVe",
  "15205": "Hoa hậu",
  "15206": "Phù thủy bí ngô",
  "15207": "Vũ điệu Nghê Thường",
  "15208": "Tà linh pháp trượng",
  "15209": "Mèo công nghệ",
  "15210": "Thần ngọc",
  "15211": "Thất Tịch tiên tử",
  "15212": "Eternal Sailor Moon",
  "15213": "Mối tình đầu",
  "15216": "Tuế Hàn Đỗ Quyên",
  "15300": "Mặc định",
  "15301": "Đôi cánh đại dương",
  "15302": "Dơi địa ngục",
  "15303": "Người dơi",
  "15304": "Chiến binh kim quang",
  "15305": "Thiếu chủ bóng đêm",
  "15306": "Thợ săn chính nghĩa",
  "15400": "Mặc định",
  "15401": "Khuyên bạc",
  "15402": "Thỏ may mắn",
  "15403": "Chiến binh nguyệt tộc",
  "15404": "Hoạt náo viên",
  "15405": "Nữ hoàng thể thao",
  "15406": "Dạ nguyệt thánh nữ",
  "15407": "Giảng viên tình ái",
  "15408": "Nữ cướp biển",
  "15409": "WaVe",
  "15410": "Vũ điệu Giáng Sinh",
  "15412": "Huyền Cửu Thiên",
  "15413": "Trấn Yêu Thần Lộc",
  "15414": "Thần Sứ kiều diễm",
  "15600": "Mặc định",
  "15601": "Thiếu niên hắc ám",
  "15602": "Quang vinh",
  "15603": "Quỷ soái nguyệt tộc",
  "15604": "Siêu sao bóng rổ",
  "15605": "Xứ sở thần tiên",
  "15606": "Tư lệnh viễn chinh",
  "15607": "Âm dương sư",
  "15608": "Ảo thuật gia",
  "15609": "Thống lĩnh hỗn mang",
  "15610": "Mật vụ thần thám",
  "15611": "HLV bất bại",
  "15612": "Ác nhân đồ chơi",
  "15700": "Mặc định",
  "15702": "Đại tù trưởng",
  "15703": "Băng quyền quán quân",
  "15704": "Chiến thần Muay Thái",
  "15705": "Siêu việt",
  "15706": "Siêu cấp tin tặc",
  "15707": "Saitama Cosplay",
  "15708": "Mãnh lôi thần quyền",
  "15709": "MC võ đài",
  "15710": "Bão vũ Cuồng lôi",
  "15711": "Gon",
  "15712": "Lễ hội té nước",
  "15900": "Mặc định",
  "15901": "Hoa tiêu đại dương",
  "15902": "Môn đồ tập sự",
  "15903": "15903",
  "16200": "Mặc định",
  "16201": "Bọ cánh bạc",
  "16202": "Yêu trùng cổ mộ",
  "16203": "ST.L-162",
  "16204": "Bọ cánh cam",
  "16205": "Tử trùng DDos",
  "16300": "Mặc định",
  "16301": "Thợ săn tiền thưởng",
  "16302": "Đại tướng nguyệt tộc",
  "16303": "Thanh long bang chủ",
  "16304": "Samurai huyền thoại",
  "16305": "Dạ hội",
  "16306": "Chiến binh Cyborg",
  "16307": "Ultraman",
  "16308": "Đặc nhiệm Giáng sinh",
  "16309": "Khiêu chiến",
  "16310": "Ailing Samurai",
  "16311": "Maple Frost",
  "16313": "Thống Lãnh quỷ binh",
  "16600": "Mặc định",
  "16601": "Hoàng kim cốt",
  "16602": "Lãnh chúa xương",
  "16603": "Si tình kiếm",
  "16604": "Siêu sao Cricket",
  "16605": "Đặc cảnh băng lôi",
  "16606": "Hiệp sĩ trăng khuyết",
  "16607": "Siêu việt",
  "16608": "Crescent General",
  "16609": "Tôn Hổ vô song",
  "16610": "Hoàng tử Okka",
  "16611": "Biệt đội băng lam",
  "16700": "Mặc định",
  "16701": "Đạo tặc",
  "16702": "Hỏa nhãn kim tinh",
  "16703": "Siêu việt",
  "16704": "Ngộ khá trẩu",
  "16705": "Siêu việt 2.0",
  "16706": "Đặc vụ băng hầu",
  "16707": "Nhóc tì bá đạo",
  "16708": "Tề Thiên ma hầu",
  "16709": "Cổ thần Ai Cập",
  "16710": "Tân niên Võ thần",
  "16711": "Thần Giáp Xích Diễm",
  "16712": "Tề Thiên Võ Thánh",
  "16800": "Mặc định",
  "16801": "Dung nham",
  "16802": "Dung nham",
  "16803": "Cự thần viễn cổ",
  "16804": "Máy đào khoáng",
  "16805": "Vệ binh hỏa diệm",
  "16806": "Golem thảo nguyên",
  "16900": "Mặc định",
  "16901": "Thỏ thợ mỏ",
  "16902": "Chú thỏ ngọc",
  "16903": "Xứ sở thần tiên",
  "16904": "Thỏ nhồi bông",
  "16905": "Giấc mơ trưa",
  "16906": "Lẩu chua cay",
  "16907": "Sứ giả thiên giới",
  "16909": "Siêu Cấp Tối Thượng",
  "16910": "Linh Hoa thần nữ",
  "17000": "Mặc định",
  "17001": "Anh thợ điện",
  "17002": "Lính cứu hỏa",
  "17003": "Binh nhì",
  "17005": "Thợ cắt cáp",
  "17100": "Mặc định",
  "17101": "Thợ sửa cáp",
  "17102": "Cá cắn cáp",
  "17103": "Đại sư sushi",
  "17104": "Tiệc bãi biển",
  "17106": "Bách tướng Lão tam",
  "17107": "Caesar bão tố",
  "17300": "Mặc định",
  "17301": "Nhà thám hiểm",
  "17302": "Đội đặc nhiệm",
  "17303": "Tiệc bánh kẹo",
  "17304": "Tuần lộc láu lỉnh",
  "17305": "Phi hành gia",
  "17306": "Tay đua F1",
  "17307": "Shipper Siêu thanh",
  "17308": "Phi hồ ẩn sĩ",
  "17309": "Phong tranh thám xuân",
  "17310": "Rối Gỗ Tinh Quái",
  "17400": "Mặc định",
  "17401": "Trò đùa tử vong",
  "17402": "Vua hề",
  "17403": "Gã hề",
  "17404": "Đêm kinh hoàng",
  "17405": "Đạo tặc tử quang",
  "17406": "Streamer bí ẩn",
  "17407": "Dạ Xoa thiếu chủ",
  "17408": "Siêu Trùm phản diện",
  "17500": "Mặc định",
  "17501": "Thuyền trưởng râu đỏ",
  "17502": "Khô lâu đại tướng",
  "17503": "Chàng gấu tuyết",
  "17504": "Đi vào lòng đất",
  "17505": "Mèo Thần tài",
  "17506": "Sumo",
  "17507": "Tiệc bãi biển",
  "17508": "Màu cờ sắc áo",
  "17509": "Vũ điệu Samba",
  "17510": "Cỗ xe tăng",
  "17512": "Cận vệ Mafia",
  "17517": "Thần ẩm thực",
  "17518": "Thủ vệ Dạ Ưng",
  "17700": "Mặc định",
  "17701": "Thám tử tư",
  "17702": "Quang thánh tiễn",
  "17703": "Quang vinh",
  "17704": "Nữ vương pháo hoa",
  "17705": "Dạ tiệc",
  "17706": "Đồng phục Shihakusho",
  "17708": "Đặc vụ thần thám",
  "17709": "Linh Hoa thần nữ",
  "18000": "Mặc định",
  "18001": "Hiệp sĩ nhí",
  "18002": "Găng tay vàng",
  "18003": "Quang vinh",
  "18004": "Thần đồng sinh hóa",
  "18005": "Thần thoại Hy Lạp",
  "18006": "Tiểu King Kong",
  "18007": "Chuyên gia đập hộp",
  "18008": "Không trêu bạn",
  "18009": "Trà chanh",
  "18300": "Mặc định",
  "18400": "Mặc định",
  "18401": "Cảnh vệ rừng",
  "18402": "Nghìn lẻ một đêm",
  "18403": "Ngủ trong rừng",
  "18404": "Hotgirl Trà sữa",
  "18405": "Hồng liên tiên tử",
  "18406": "Xứ sở diệu kỳ",
  "18407": "Cổ tích Biển xanh",
  "18408": "Bé hoa xuân",
  "18600": "Mặc định",
  "18601": "Xiếc cung đình",
  "18602": "Mặc định",
  "18603": "Tay đua Siêu Tốc",
  "18604": "Thần thoại Hy Lạp",
  "18605": "Thịt xiên nướng",
  "18606": "Tanuki chiêu tài",
  "18609": "Lẩu nấm",
  "18610": "Giấc mơ ngọt ngào",
  "18700": "Mặc định",
  "18701": "Thú vệ cổ mộ",
  "18702": "Vũ khúc long hổ",
  "18703": "Linh tượng vu nữ",
  "18704": "Vũ khúc thần sứ",
  "18705": "Thỏ may mắn",
  "18706": "Nữ hoàng gấu xám",
  "18708": "Quản lý tài năng",
  "18709": "Bạn muốn hẹn hò?",
  "18712": "Thần phong Thống lĩnh",
  "18713": "Thần tượng nhạc rock",
  "18714": "Ký Ức Đại Dương",
  "18900": "Mặc định",
  "18901": "Cún siêu quậy",
  "18902": "Đội đặc nhiệm",
  "18903": "Nghệ sĩ đường phố",
  "18905": "Trưởng lão",
  "18906": "Cursed Corpse",
  "19000": "Mặc định",
  "19001": "Nhà thám hiểm",
  "19002": "Tân thần thiên hà",
  "19003": "Phù thủy kiến tạo",
  "19004": "Đông êm đềm",
  "19005": "Phó kỷ luật",
  "19006": "Tân thần hoàng kim",
  "19007": "Chí tôn kiếm tiên",
  "19008": "Dạ hội",
  "19009": "Thần sứ STL-79",
  "19010": "Hỏa thần long tộc",
  "19011": "Đại úy Athanor",
  "19012": "Tân niên vệ thần",
  "19013": "Tiêu Dao Vũ Thần",
  "19014": "Giám thị sấm sét",
  "19015": "Satoru Gojo",
  "19100": "Mặc định",
  "19101": "Sứ giả vũ trụ",
  "19102": "Công chúa hỏa long",
  "19103": "Tuần lộc đáng yêu",
  "19104": "Vẹt cầu vồng",
  "19105": "Sứ giả quang minh",
  "19106": "Quang vinh",
  "19108": "Thụy mộc Thanh long",
  "19109": "Lữ hành Thời không",
  "19110": "Mèo hầu gái",
  "19200": "Mặc định",
  "19201": "Nữ cao bồi",
  "19202": "Đếm cừu",
  "19203": "S - Quang vinh",
  "19204": "Tâm hồn trà sữa",
  "19205": "Biệt đội băng lam",
  "19206": "Vịt lướt bọt biển",
  "19300": "Mặc định",
  "19301": "Đặc cảnh NYPD",
  "19302": "Đặc công Nhện đỏ",
  "19303": "Thư ký",
  "19304": "Thỏ may mắn",
  "19305": "Võ thần thiên hà",
  "19306": "Hội ám hoàng",
  "19307": "Nữ đội trưởng",
  "19310": "Khủng long xanh",
  "19312": "Thám tử trung học",
  "19400": "Mặc định",
  "19500": "Mặc định",
  "19501": "Phẩm chất quý tộc",
  "19502": "Chiến binh trăng khuyết",
  "19503": "Thần thoại Hy Lạp",
  "19504": "Nhà leo núi",
  "19505": "Hồng hạc thị vệ",
  "19506": "Sát quỷ đoàn",
  "19508": "Kurapika",
  "19509": "Sát thần Bạch Hổ",
  "19510": "Cá heo bảnh chọe",
  "19600": "Mặc định",
  "19601": "Cảnh vệ thảo nguyên",
  "19602": "Mafia",
  "19603": "Guitar tình ái",
  "19604": "Chiến binh bóng tối",
  "19605": "Sứ giả tận thế",
  "19606": "Tuyết ưng",
  "19607": "Xạ thủ tinh linh",
  "19609": "Trấn Thiên phi hồ",
  "19611": "Hỏa diệm Chu Tước",
  "19612": "Tuyệt ảnh",
  "19613": "DJ <Siêu Đẳng>",
  "19900": "Mặc định",
  "19901": "Soái tặc",
  "19902": "Phi vụ thế kỷ",
  "19903": "Học viện Carano",
  "19904": "Siêu thám tử",
  "19905": "Chú ong bay cao",
  "19906": "Tuxedo Mask",
  "19907": "Uyên Ương mộng điệp",
  "20600": "Mặc định",
  "20601": "Hexsword",
  "50100": "Mặc định",
  "50101": "Cảnh vệ rừng",
  "50102": "Giám thị thân thiện",
  "50103": "Chung tình tiễn",
  "50104": "Thánh nữ mật hội",
  "50105": "Thần sứ F.E.E-X1",
  "50106": "Cẩm y vệ: Phi ưng",
  "50107": "Dạ hội",
  "50108": "Thứ nguyên vệ thần",
  "50110": "Công chúa mộng mơ",
  "50111": "Vũ khúc yêu hồ",
  "50112": "Tân niên vệ thần",
  "50113": "Nghìn lẻ một đêm",
  "50114": "Quang vinh",
  "50115": "Bách hoa tiên nữ",
  "50116": "Ô Thước tiên nữ",
  "50117": "Thiên Vũ Thần Long",
  "50118": "Jujutsu Socerer",
  "50119": "Lân Quang Thánh Điệu",
  "50120": "Kỷ Nguyên Hổ Phách",
  "50200": "Mặc định",
  "50201": "Bạch kiếm tiểu thư",
  "50202": "Siêu sao bóng chày",
  "50203": "Tổ trưởng học đường",
  "50204": "Thần thoại Hy Lạp",
  "50205": "Nữ tổng tài",
  "50206": "Thần trí tuệ",
  "50207": "Xứ sở diệu kỳ",
  "50208": "Hoa anh đào",
  "50300": "Mặc định",
  "50301": "Zuka",
  "50302": "Đại phú ông",
  "50303": "Giáo sư sừng sỏ",
  "50304": "Phát tài",
  "50305": "Gấu nhồi bông",
  "50306": "Diệt nguyệt nguyên soái",
  "50307": "Đầu bếp hoàng cung",
  "50308": "Mãnh hổ",
  "50309": "Rapper Big Panda",
  "50310": "Ngư ông đắc lợi",
  "50311": "Xích Hùng Chiến Giáp",
  "50400": "Mặc định",
  "50401": "Thế chiến",
  "50500": "Mặc định",
  "50501": "Chú thợ ống nước",
  "50502": "Liệt hỏa dung nham",
  "50503": "Thần thoại Hy Lạp",
  "50504": "Thế giới kẹo ngọt",
  "50505": "Đồ chơi",
  "50506": "Sói Quàng Khăn Đỏ",
  "50600": "Mặc định",
  "50601": "Sĩ quan viễn chinh",
  "50602": "Ám tử đao",
  "50603": "Quỷ nguyệt tướng",
  "50604": "Đao phủ tận thế",
  "50605": "Chiến binh trăng khuyết",
  "50606": "Thuyền trưởng hải tặc",
  "50607": "Nhạc sĩ huyền thoại",
  "50608": "Quái Kiệt Guitar",
  "50610": "Huyết ảnh Tà thần",
  "50611": "Chiến xa hắc ám",
  "50612": "Chiến xa quang minh",
  "50700": "Mặc định",
  "50701": "Tia chớp tương lai",
  "50800": "Mặc định",
  "50801": "Hải tặc nhí",
  "50802": "Thỏ siêu quậy",
  "50803": "Ếch nhồi bông",
  "50805": "Máy phát quà",
  "50806": "Rồng đi bộ",
  "50807": "Cô bé bút chì",
  "50808": "Bé hề",
  "50900": "Mặc định",
  "50901": "Hạt trưởng kiểm lâm",
  "50902": "Chiến binh lục bảo",
  "50903": "Động cơ vĩnh cửu",
  "50904": "Mộc quỷ",
  "50905": "Titan Băng giá",
  "50906": "Candy Bear",
  "51000": "Mặc định",
  "51001": "Hồ quý phi",
  "51002": "Thần tượng âm nhạc",
  "51003": "Nguyệt mị ly",
  "51004": "Tiểu thơ anh đào",
  "51005": "Tân nguyệt mị ly",
  "51006": "Nữ thần F1",
  "51007": "Tiệc bãi biển",
  "51008": "Thủy thủ hồ ly",
  "51009": "WaVe",
  "51013": "Lưu thủy Thần long",
  "51014": "Thần hổ Xiêm La",
  "51015": "Ma Pháp Tối Thượng",
  "51100": "Mặc định",
  "51101": "Tân thủy thủ",
  "51102": "Cao bồi",
  "51103": "Quang vinh",
  "51104": "Mèo đi mưa",
  "51105": "Chiến binh hải tộc",
  "51108": "Gà mờ",
  "51109": "Giao long",
  "51110": "Bậc thầy Sushi",
  "51200": "Mặc định",
  "51201": "Pháo thủ tuộc neo",
  "51202": "Biệt đội siêu hùng",
  "51203": "Cuồng tặc",
  "51204": "Thợ cơ khí",
  "51207": "Cảnh sát trưởng",
  "51208": "Bách tướng Lão đại",
  "51209": "Thánh Vệ",
  "51300": "Mặc định",
  "51301": "Tư lệnh viễn chinh",
  "51302": "Sứ giả tinh hệ",
  "51303": "Thần mặt trời",
  "51304": "Khiêu chiến",
  "51305": "Tác gia đương đại",
  "51306": "Chí tôn Tà phượng",
  "51307": "Xích Huyết Bá Tước",
  "51400": "Mặc định",
  "51401": "Thám tử tập sự",
  "51402": "Kèn ái tình",
  "51403": "Hầu gái",
  "51404": "Tiệc bánh kẹo",
  "51405": "Cháy phố",
  "51406": "Lễ hội hoa",
  "51408": "Hỏa thuật sư",
  "51409": "Bạch Tuyết Kỳ Lạ",
  "51500": "Mặc định",
  "51501": "Bá tước",
  "51502": "Thống soái kháng chiến",
  "51503": "Dạ hội",
  "51504": "Thần kiếm Susanoo",
  "51505": "Quang vinh 2.0",
  "51506": "Nguyệt loan đao",
  "51508": "Cứu hộ",
  "51509": "Tổng Lãnh thiên thần",
  "51800": "Mặc định",
  "51801": "Trưởng ngoại khoa",
  "51802": "Đặc công mãng xà",
  "51803": "Thống soái đế chế",
  "51804": "Huyết thủ nguyệt tộc",
  "51805": "Sao đỏ học đường",
  "51806": "Tà linh ma đao",
  "51807": "Hoàng kim soái vương",
  "51808": "Nghịch Thiên long đế",
  "51809": "Người gác đền",
  "51810": "Giám đốc âm nhạc",
  "51812": "Huyết phong",
  "51813": "Đảo thiên đường",
  "51900": "Mặc định",
  "51901": "Nữ quản ga",
  "51902": "Xứ sở thần tiên",
  "51903": "Thần tượng âm nhạc",
  "51904": "Tiệc bãi biển",
  "51905": "Phi hành gia",
  "51906": "Vân Mộng tiên tử",
  "51907": "Nữ sinh Trung học",
  "51908": "Chị ong bay thấp",
  "51909": "Tiên tri tập sự",
  "51911": "Băng kỳ lâm",
  "51912": "Doombot thơ ngây",
  "52000": "Mặc định",
  "52001": "Đạo tặc",
  "52002": "Gián điệp tinh hệ",
  "52003": "Thần thoại Hy Lạp",
  "52004": "Chị đại học đường",
  "52006": "Thuỷ thần kiều diễm",
  "52007": "Kimono",
  "52008": "Phù thủy trang điểm",
  "52009": "Tiệc bãi biển",
  "52010": "Men Lam Hồn Gốm",
  "52011": "Lưu Ly Long Mẫu",
  "52012": "Vũ điệu dân gian",
  "52013": "Thỏ may mắn",
  "52100": "Mặc định",
  "52101": "Vũ kiếm sư",
  "52102": "Giám sát tinh Hệ",
  "52103": "Kiếm sĩ Olympic",
  "52104": "Thần thoại Hy Lạp",
  "52105": "Seven",
  "52106": "Tà long kiếm sĩ",
  "52107": "Xứ sở thần tiên",
  "52108": "Bá vương Âm nhạc",
  "52110": "Hisoka",
  "52111": "Hỏa diệm Thần long",
  "52112": "S - Quang vinh",
  "52113": "Kỷ Nguyên Hổ Phách",
  "52200": "Mặc định",
  "52201": "Vượt ngục",
  "52202": "Diệt nguyệt tiên phong",
  "52203": "Quái vật cương thi",
  "52204": "Genos",
  "52205": "Huyết thủ Tu La",
  "52207": "Stream đến bao giờ",
  "52208": "Sát thủ Mafia",
  "52209": "Dị nhân tinh hệ",
  "52300": "Mặc định",
  "52301": "Nam tước",
  "52302": "Đô đốc tinh Hệ",
  "52303": "Pháp sư hỏa long",
  "52304": "Tiến sĩ thiên tài",
  "52305": "Chân nhân",
  "52306": "Tông đồ Chân lý",
  "52307": "Bác sĩ thú y",
  "52400": "Mặc định",
  "52401": "Hầu gái",
  "52402": "Thần tượng âm nhạc",
  "52403": "Toán Hóa Sinh",
  "52404": "Kimono",
  "52405": "Siêu cấp tin tặc",
  "52406": "Phi hành gia",
  "52407": "Harley Quinn",
  "52408": "Quân nhạc Mildar",
  "52410": "Tử đinh hương",
  "52411": "Vua trò chơi",
  "52412": "S - Quang vinh",
  "52413": "Huyết phong",
  "52414": "Càn Nguyên Điện Chủ",
  "52415": "Bugcag Assemble",
  "52500": "Mặc định",
  "52501": "Gà siêu quậy",
  "52502": "Tiểu đệ hổ báo",
  "52503": "Cá siêu quậy",
  "52504": "Gà siêu cấp",
  "52505": "Vua sân cỏ",
  "52506": "Ông trùm Giáng sinh",
  "52507": "Duyên tơ hồng",
  "52600": "Mặc định",
  "52601": "Giấc mơ ngọt ngào",
  "52602": "Tiểu thư kẹo ngọt",
  "52603": "Tiểu thư gấu trúc",
  "52604": "Lễ hội ma quái",
  "52605": "Gián điệp hacker",
  "52606": "Lễ hội ma quái",
  "52607": "Tiểu thư",
  "52608": "Rồng bé bự",
  "52609": "Quận chúa sông Nile",
  "52610": "Capoo Boom",
  "52700": "Mặc định",
  "52701": "Quý tiểu thư",
  "52702": "Chiêm tinh gia",
  "52703": "Thần tượng âm nhạc",
  "52704": "Phi vụ thế kỷ",
  "52705": "Thần thoại Hy Lạp",
  "52706": "Lam Hải phu nhân",
  "52707": "Thủy liên hoa",
  "52708": "Cô thủ thư",
  "52709": "Bách nhạn Ngân linh",
  "52710": "Nova Stardust",
  "52800": "Mặc định",
  "52801": "Tiểu long",
  "52802": "Đặc vụ cáo tuyết",
  "52803": "Quán quân",
  "52804": "Thiếu nữ pháo hoa",
  "52805": "Blogger Ẩm thực",
  "52806": "Búp bê Daruma",
  "52808": "Thần phong Hiệp nữ",
  "52900": "Mặc định",
  "52901": "Dạ huyết tộc",
  "52902": "Ma kỵ tử sĩ",
  "52903": "Xung thiên thần tướng",
  "52904": "Tư lệnh viễn chinh",
  "52905": "Chiến thần Ai Cập",
  "52906": "Hắc kỵ thời không",
  "52907": "S - Quang vinh",
  "53000": "Mặc định",
  "53001": "Cảnh vệ bầu trời",
  "53002": "Pháp sư trăng khuyết",
  "53003": "Quý tộc Norman",
  "53005": "Ông bầu Showbiz",
  "53007": "Đường chủ yêu giới",
  "53008": "Snack giòn tan",
  "53100": "Mặc định",
  "53101": "Y tá lạ",
  "53102": "Học viện Carano",
  "53103": "Sát thủ bí ngô",
  "53104": "Thủy thủ",
  "53105": "Tiệc bãi biển",
  "53107": "Nezuko Kamado",
  "53109": "Nghệ sĩ Graffiti",
  "53110": "Hồ điệp",
  "53111": "Môn đồ Xảo quyệt",
  "53112": "FMVP",
  "53200": "Mặc định",
  "53201": "Cận vệ hoàng gia",
  "53202": "Giả kim thuật sư",
  "53203": "Quán quân",
  "53204": "Tiệc bãi biển",
  "53205": "Ước nguyện Giáng sinh",
  "53207": "Thám tử trung học",
  "53300": "Mặc định",
  "53301": "Tay đua đường phố",
  "53302": "Tay súng diệt thần",
  "53303": "Tay súng vô địch",
  "53304": "Xạ thần Tinh Vệ",
  "53305": "Kim Quy thần vương",
  "53306": "Tiệc bãi biển",
  "53307": "Sắc màu Holi",
  "53308": "Chiến thần MOBA",
  "53309": "Vệ binh Giáng sinh",
  "53310": "Thám tử học đường",
  "53400": "Mặc định",
  "53401": "Chiến binh quyến rũ",
  "53402": "Quận chúa Tuyết",
  "53404": "Quý cô tuổi Dần",
  "53405": "Băng Sa công chúa",
  "53406": "Lữ khách cao nguyên",
  "53407": "Đảo thiên đường",
  "53500": "Mặc định",
  "53501": "Giấc mơ trưa",
  "53502": "Tiểu thư Băng giá",
  "53503": "WaVe",
  "53504": "Điệp viên cánh cụt",
  "53507": "Đại tiểu thư",
  "53508": "Tiểu thư bóng đêm",
  "53509": "Lữ khách sa mạc",
  "53510": "Giấc mộng biển xanh",
  "53511": "S - Quang vinh",
  "53512": "Nữ quỷ say ngủ",
  "53600": "Mặc định",
  "53601": "Sát thủ đô thị",
  "53602": "Hoàng kim công chúa",
  "53604": "Tiệc bãi biển",
  "53605": "Lam Hải quận chúa",
  "53606": "Tiểu thư Mafia",
  "53608": "Sát thủ Dạ Ưng",
  "53609": "Quán Quân",
  "53700": "Mặc định",
  "53701": "Hắc kiếm sĩ Kirito",
  "53702": "Kirito",
  "53703": "Tuyết sơn song kiếm",
  "53704": "Thần mặt trời",
  "53705": "Bạch kiếm sĩ",
  "53706": "Hạo Thiên Khuyển",
  "53707": "Tình yêu nổi loạn",
  "53708": "Lân sư Vũ thần",
  "53709": "Cẩm y vệ Xích Hổ",
  "53800": "Mặc định",
  "53801": "Tiểu hoàng đế",
  "53802": "Thần Miêu thiếu chủ",
  "53803": "Bạch hồ ly",
  "53804": "Yêu nhân học viện",
  "53805": "Tiếng thét Hỗn mang",
  "53900": "Mặc định",
  "53901": "Chiến giáp hắc ám",
  "53902": "Hỏa vân tà thần",
  "53903": "Quân vương bóng tối",
  "53904": "Quân vương ánh sáng",
  "53905": "Giáo chủ tinh hệ",
  "54000": "Mặc định",
  "54001": "Soái ca thánh điện",
  "54002": "Toshiro Hitsugaya",
  "54003": "Khiêu chiến",
  "54004": "Mật vụ hacker",
  "54005": "Nhà thám hiểm",
  "54006": "Kỳ Lân soái",
  "54007": "Vua về nhì",
  "54100": "Mặc định",
  "54101": "Thỏ ma quái",
  "54102": "Cô bé sợ ma",
  "54103": "Hoa hướng dương",
  "54104": "S - Quang vinh",
  "54200": "Mặc định",
  "54201": "Lãng khách",
  "54202": "Đao khách vô tình",
  "54203": "Xích long hỏa diệm",
  "54204": "S - Quang vinh",
  "54205": "Thần phong Hộ vệ",
  "54206": "Hỗn mang đao",
  "54300": "Mặc định",
  "54301": "Hoạt náo viên",
  "54302": "Điệp viên ký ức",
  "54303": "MC Sóc nhỏ",
  "54304": "Thủy thủ",
  "54307": "Công chúa Cầu Vồng",
  "54308": "Hỏa Hồ Tiên Ngư",
  "54400": "Mặc định",
  "54401": "Nhà chế tác",
  "54402": "Tanjiro Kamado",
  "54403": "Công tước Norman",
  "54404": "Giấc mơ sao",
  "54405": "Bích Hạc Phiên Vân",
  "54500": "Mặc định",
  "54501": "Tiểu công chúa",
  "54503": "Chiêm tinh gia",
  "54504": "Vũ phiến hỏa diệm",
  "54505": "Nữ hoàng Băng giá",
  "54600": "Mặc định",
  "54601": "Tiểu kỳ lân",
  "54602": "Minh tinh ảo thuật",
  "54603": "Thuyền trưởng song luân",
  "54604": "54604",
  "54605": "Ốc quế ngọt ngào",
  "54606": "Lễ hội té nước",
  "54800": "Mặc định",
  "54801": "Chiến binh sa mạc",
  "54802": "Hoàng Kim cơ giáp",
  "54803": "Đập vỡ Cây đàn",
  "54804": "Kình thiên Long Kỵ",
  "54805": "Lữ Hành Thời Không",
  "56300": "Mặc định",
  "56301": "56301",
  "56600": "Mặc định",
  "56700": "Mặc định",
  "56701": "Mộc tinh linh",
  "56702": "Cực địa tinh linh",
  "56703": "Tình yêu cổ tích",
  "56704": "Huyễn Ảnh Mị Điệp",
  "56800": "Mặc định",
  "56801": "Thầy tướng",
  "59600": "Mặc định",
  "59700": "Mặc định",
  "59701": "Võ sĩ Giác đấu",
  "59702": "Yuji Itadori",
  "59800": "Mặc định",
  "59801": "Lôi vệ",
  "59802": "Thiên Phủ - Tư Mệnh",
  "59900": "Mặc định",
  "59901": "Thiên Tướng - Độ Ách"
};

const heroList = {
  105: "Toro",
  106: "Krixi",
  107: "Zephys",
  108: "Gildur",
  109: "Veera",
  110: "Kahlii",
  111: "Violet",
  112: "Yorn",
  113: "Chaugnar",
  114: "Omega",
  115: "Jinna",
  116: "Butterfly",
  117: "Ormarr",
  118: "Alice",
  119: "Mganga",
  120: "Mina",
  121: "Marja",
  123: "Maloch",
  124: "Ignis",
  126: "Arduin",
  127: "Azzen'Ka",
  128: "Lữ Bố",
  129: "Triệu Vân",
  130: "Airi",
  131: "Murad",
  132: "Hayate",
  133: "Valhein",
  134: "Skud",
  135: "Thane",
  136: "Ilumia",
  137: "Paine",
  139: "Kil'Groth",
  140: "Superman",
  141: "Lauriel",
  142: "Natalya",
  144: "Taara",
  146: "Zill",
  148: "Preyta",
  149: "Xeniel",
  150: "Nakroth",
  152: "Điêu Thuyền",
  153: "Kaine",
  154: "Yena",
  156: "Aleister",
  157: "Raz",
  159: "Dolia",
  162: "Kriknak",
  163: "Ryoma",
  166: "Arthur",
  167: "Ngộ Không",
  168: "Lumburr",
  169: "Slimz",
  170: "Moren",
  171: "Cresht",
  173: "Fennik",
  174: "Stuart",
  175: "Grakk",
  177: "Lindis",
  180: "Max",
  184: "Helen",
  186: "TeeMee",
  187: "Arum",
  189: "Krizzix",
  190: "Tulen",
  191: "Rouie",
  192: "Celica",
  193: "Amily",
  194: "Wiro",
  195: "Enzo",
  196: "Elsu",
  199: "Eland'orr",
  206: "Charlotte",
  501: "Tel'Annas",
  502: "Astrid",
  503: "Zuka",
  504: "Wonder Woman",
  505: "Baldum",
  506: "Omen",
  507: "The Flash",
  508: "Wisp",
  509: "Y'bneth",
  510: "Liliana",
  511: "Ata",
  512: "Rourke",
  513: "Zata",
  514: "Roxie",
  515: "Richter",
  518: "Quillen",
  519: "Annette",
  520: "Veres",
  521: "Florentino",
  522: "Errol",
  523: "D'Arcy",
  524: "Capheny",
  525: "Zip",
  526: "Ishar",
  527: "Sephera",
  528: "Qi",
  529: "Volkath",
  530: "Dirak",
  531: "Keera",
  532: "Thorne",
  533: "Laville",
  534: "Dextra",
  535: "Sinestrea",
  536: "Aoi",
  537: "Allain",
  538: "Iggy",
  539: "Lorion",
  540: "Bright",
  541: "Bonnie",
  542: "Tachi",
  543: "Aya",
  544: "Yan",
  545: "Yue",
  546: "Teeri",
  548: "Bijan",
  563: "Heino",
  567: "Erin",
  568: "Ming",
  577: "Dyadia",
  595: "Edras",
  596: "Goverra",
  597: "Biron",
  598: "Bolt Baron",
  599: "Billow",
  584: "Flowborn",
  593: "Tamyn",
  999: ""
};
document.addEventListener("DOMContentLoaded", function() {
  
  const menuButton = document.getElementById('menu-button');
  const sideMenu = document.getElementById('side-menu');
  const overlay = document.getElementById('overlay');
  
  menuButton.addEventListener('click', () => {
    sideMenu.classList.add('show');
    overlay.classList.add('show');
  });
  
  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');
  });
  

  const chonMod = document.getElementById("chonmod");
  const skinList = document.getElementById("skin-list");
  let isOpen = false;
  let isAnimating = false; 
  
  function openSkinList() {
    if (isAnimating) return;
    isAnimating = true;
    
    skinList.style.height = skinList.scrollHeight + "px";
    skinList.classList.remove("collapsed");
    skinList.classList.add("expanded");
    
    skinList.addEventListener("transitionend", function handler() {
      skinList.style.height = "auto";
      isAnimating = false;
      skinList.removeEventListener("transitionend", handler);
    });
    isOpen = true;
  }
  
  function closeSkinList() {
    if (isAnimating) return;
    isAnimating = true;
    
    skinList.style.height = skinList.scrollHeight + "px";
    requestAnimationFrame(() => {
      skinList.style.height = "0px";
      skinList.classList.add("collapsed");
      skinList.classList.remove("expanded");
    });
    
    skinList.addEventListener("transitionend", function handler() {
      isAnimating = false;
      skinList.removeEventListener("transitionend", handler);
    });
    isOpen = false;
  }
  
  chonMod.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isOpen) {
      closeSkinList();
    } else {
      openSkinList();
    }
  });
  
  
  document.addEventListener("click", function(event) {
    if (!isOpen || isAnimating) return; 
    const target = event.target;
    const isOutsideSkinList = !skinList.contains(target);
    const isInsideModCard = target.closest('.modcard') !== null;
    const isInsideSideMenu = target.closest('#side-menu') !== null;
    const isInsideHeader = target.closest('header') !== null;
    const isInsideOverlay = target.closest('#overlay') !== null;
    
    if (isOutsideSkinList && !isInsideModCard && !isInsideSideMenu && !isInsideHeader && !isInsideOverlay) {
      closeSkinList();
    }
  });
  
  skinList.addEventListener("click", function(event) {
    event.stopPropagation();
  });
  
  

  window.addEventListener('wheel', function(e) { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
  window.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) e.preventDefault();
  });
  

  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", e => {
      const link = item.querySelector("a");
      if (link && !e.target.closest("a")) window.open(link.href, '_blank');
    });
  });
  
});
/* =========================================================================
   splash.js — Thư viện Splash Art (đã tối ưu)
   Thay đổi chính:
   • checkImageExists chạy SONG SONG có giới hạn (mapLimit) thay vì tuần tự
     từng ảnh -> mở thư viện / mở 1 tướng nhanh hơn nhiều.
   • Bỏ lỗi append trùng (ảnh trước đây bị thêm 2 lần).
   • Style ảnh chuyển sang class (components.css) thay vì set inline lặp lại.
   • Gộp 2 listener document-click trùng nhau thành 1.
   ========================================================================= */
/* Chạy tối đa `limit` tác vụ async cùng lúc, GIỮ NGUYÊN thứ tự kết quả. */

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  async function run() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

function getAverageColor(image) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const w = canvas.width = 10, h = canvas.height = 10;
      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;
      let r = 0, g = 0, b = 0;
      const total = w * h;
      for (let i = 0; i < data.length; i += 4) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
      resolve({ r: Math.round(r / total), g: Math.round(g / total), b: Math.round(b / total) });
    };
    img.onerror = () => resolve({ r: 255, g: 255, b: 255 });
  });
}

const headGrid = document.getElementById('head-grid');
const searchInput = document.getElementById('search');
let showSplashId = localStorage.getItem('showSplashId') === 'true';
let showSplashLabel = localStorage.getItem('showSplashLabel') === 'true';
const ID_RANGES = [{ start: 105, end: 206 }, { start: 501, end: 650 }];
let heroSkinShop = window.heroSkinShop || [];

function showToast(message, duration = 2000) {
  const toast = document.getElementById('toast');
  const messageEl = document.getElementById('toast-message');
  if (!toast || !messageEl) return;
  messageEl.textContent = message;
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// Dọn cache cũ: bản trước lưu image_exists_* trong localStorage tới 1 năm,
// khiến skin mới thêm không hiện vì kết quả "không tồn tại" bị giữ lại.
try {
  Object.keys(localStorage)
    .filter(k => k.startsWith('image_exists_'))
    .forEach(k => localStorage.removeItem(k));
} catch (e) {}

// KHÔNG lưu cache vào localStorage nữa. Chỉ nhớ trong PHIÊN hiện tại để không
// kiểm tra trùng 1 URL nhiều lần; tải lại trang là kiểm tra mới hoàn toàn.
const imageCacheMemory = {};
function checkImageExists(url) {
  if (url in imageCacheMemory) return Promise.resolve(imageCacheMemory[url]);
  return new Promise(resolve => {
    const img = new Image();
    img.onload  = () => { imageCacheMemory[url] = true;  resolve(true); };
    img.onerror = () => { imageCacheMemory[url] = false; resolve(false); };
    img.src = url;
  });
}

async function showHeroImages(heroId, splashDiv, card) {
  if (card.dataset.loading === "true") return;
  card.dataset.loading = "true";

  const isActive = card.classList.contains('active');
  document.querySelectorAll('.dat2-item').forEach(el => {
    el.classList.remove('active');
    const otherSplash = el.querySelector('.splash-container');
    if (otherSplash) otherSplash.innerHTML = '';
  });

  if (isActive) {
    splashDiv.innerHTML = '';
    card.classList.remove('active');
    card.dataset.loading = "false";
    return;
  }

  card.classList.add('active');
  splashDiv.innerHTML = '<small class="splash-loading">Đang tải, vui lòng đợi giây lát...</small>';

  // 1) Dò 100 khả năng id splash SONG SONG (nhanh), giữ thứ tự
  const suffixes = Array.from({ length: 100 }, (_, i) => String(i).padStart(2, '0'));
  const scanned = await mapLimit(suffixes, 12, async (suffix) => {
    const fullId = `${heroId}${suffix}`;
    const bigUrl = `https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/${fullId}.jpg`;
    return { fullId, bigUrl, exists: await checkImageExists(bigUrl) };
  });
  const existing = scanned.filter(s => s.exists);

  if (existing.length === 0) {
    splashDiv.innerHTML = '<small class="splash-error">Không tìm thấy splash art.</small>';
    card.dataset.loading = "false";
    return;
  }

  splashDiv.innerHTML = '';
  // 2) Dựng từng ảnh có thật (số lượng ít) — style bằng class
  for (const { fullId, bigUrl } of existing) {
    const wrapper = document.createElement('div');
    wrapper.className = 'splash-wrapper';

    const img = document.createElement('img');
    img.src = bigUrl;
    img.alt = fullId;
    img.loading = 'lazy';
    img.className = 'splash-big';

    const idTag = document.createElement('div');
    idTag.textContent = (typeof skinData !== 'undefined' && skinData[fullId])
      ? `${fullId}: ${skinData[fullId]}` : fullId;
    idTag.className = 'splash-id';
    idTag.style.display = showSplashId ? 'block' : 'none';

    // Label skin
    let labelFile = `${fullId}.png`;
    const skinInfo = heroSkinShop.find(s => String(s.ID) === fullId);
    if (skinInfo && skinInfo.LimitLabelPicUrl) labelFile = skinInfo.LimitLabelPicUrl;
    const labelUrl = `https://dl.ops.kgvn.garenanow.com/hok/SkinLabel/${labelFile}`;
    if (await checkImageExists(labelUrl)) {
      const labelImg = document.createElement('img');
      labelImg.src = labelUrl;
      labelImg.className = 'splash-label';
      labelImg.style.display = showSplashLabel ? 'block' : 'none';
      wrapper.appendChild(labelImg);
    }

    wrapper.appendChild(img);
    wrapper.appendChild(idTag);

    // Ảnh đầu tướng + viền theo màu trung bình
    const headId = convertSplashIdToHeadId(fullId);
    const headUrl = `https://dl.ops.kgtw.garenanow.com/CHT/HeroHeadPath/30${headId}head.jpg`;
    if (await checkImageExists(headUrl)) {
      const c = await getAverageColor(bigUrl);
      const headImg = document.createElement('img');
      headImg.src = headUrl;
      headImg.className = 'splash-head';
      headImg.style.border = `1px solid rgb(${Math.min(c.r + 40, 255)},${Math.min(c.g + 40, 255)},${Math.min(c.b + 40, 255)})`;
      wrapper.appendChild(headImg);
    }

    splashDiv.appendChild(wrapper);
  }

  card.dataset.loading = "false";
}

async function loadHeroHeads() {
  const allIDs = [];
  for (const range of ID_RANGES)
    for (let id = range.start; id <= range.end; id++) allIDs.push(id);
  allIDs.sort((a, b) => a - b);

  // Kiểm tra tồn tại đầu tướng SONG SONG, rồi thêm thẻ theo đúng thứ tự id
  const checked = await mapLimit(allIDs, 12, async (heroId) => {
    const idStr = String(heroId).padStart(3, '0');
    const headUrl = `https://dl.ops.kgtw.garenanow.com/CHT/HeroHeadPath/30${idStr}0head.jpg`;
    return { heroId, headUrl, exists: await checkImageExists(headUrl) };
  });

  for (const { heroId, headUrl, exists } of checked) {
    if (!exists) continue;
    const card = document.createElement('div');
    card.className = 'dat2-item';
    card.dataset.name = (heroList[heroId] || "").toLowerCase();

    const header = document.createElement('div');
    header.className = 'dat2-header';

    const img = document.createElement('img');
    img.src = headUrl;
    img.className = 'thumb';
    img.loading = 'lazy';
    img.alt = `${heroId}`;

    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    const nameEl = document.createElement('strong');
    nameEl.textContent = heroList[heroId] || `ID ${heroId}`;
    const small = document.createElement('small');
    small.textContent = 'Click để xem splash art';
    textDiv.appendChild(nameEl);
    textDiv.appendChild(small);
    header.appendChild(img);
    header.appendChild(textDiv);

    const splashContainer = document.createElement('div');
    splashContainer.className = 'splash-container';

    card.appendChild(header);
    card.appendChild(splashContainer);

    header.addEventListener('click', (e) => {
      e.stopPropagation();
      showHeroImages(heroId, splashContainer, card);
    });

    headGrid.appendChild(card);
  }
}

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.dat2-item').forEach(card => {
    const name = (card.dataset.name || "").toLowerCase();
    let matchedId = '';
    for (const [id, heroName] of Object.entries(heroList)) {
      if (heroName.toLowerCase() === name) { matchedId = id; break; }
    }
    const match = name.includes(keyword) || matchedId.includes(keyword);
    card.style.display = match ? 'flex' : 'none';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const showIdToggle = document.getElementById("toggle-show-id");
  const showLabelToggle = document.getElementById("toggle-show-label");
  if (showIdToggle) {
    showIdToggle.checked = showSplashId;
    showIdToggle.addEventListener("change", () => {
      showSplashId = showIdToggle.checked;
      localStorage.setItem('showSplashId', showSplashId);
      updateHeroNames(showSplashId);
      updateSplashIdVisibility(showSplashId);
    });
  }
  if (showLabelToggle) {
    showLabelToggle.checked = showSplashLabel;
    showLabelToggle.addEventListener("change", () => {
      showSplashLabel = showLabelToggle.checked;
      localStorage.setItem('showSplashLabel', showSplashLabel);
      updateSplashLabelVisibility(showSplashLabel);
    });
  }
});

function updateHeroNames(showId) {
  document.querySelectorAll(".dat2-item").forEach(card => {
    const img = card.querySelector("img.thumb");
    const nameEl = card.querySelector("strong");
    if (!img || !nameEl) return;
    const heroId = parseInt(img.alt);
    const name = heroList[heroId] || "null";
    nameEl.textContent = showId ? `${heroId}: ${name}` : name;
  });
}
function updateSplashIdVisibility(showId) {
  document.querySelectorAll(".splash-id").forEach(t => t.style.display = showId ? 'block' : 'none');
}
function updateSplashLabelVisibility(showLabel) {
  document.querySelectorAll(".splash-label").forEach(l => l.style.display = showLabel ? 'block' : 'none');
}

const splashButton = document.getElementById('open-splash');
const splashContainer = document.getElementById('splash-container');

function collapseSplash() {
  if (splashContainer.classList.contains('hidden')) return;
  splashContainer.style.height = splashContainer.scrollHeight + "px";
  requestAnimationFrame(() => {
    splashContainer.style.transition = "height 0.3s ease";
    splashContainer.style.height = "0px";
  });
  setTimeout(() => splashContainer.classList.add('hidden'), 300);
}

splashButton.addEventListener('click', function (event) {
  event.stopPropagation();
  if (splashContainer.classList.contains('hidden')) {
    splashContainer.classList.remove('hidden');
    splashContainer.style.height = '0px';
    requestAnimationFrame(() => {
      splashContainer.style.transition = "height 0.3s ease";
      splashContainer.style.height = splashContainer.scrollHeight + "px";
      splashContainer.addEventListener("transitionend", function handler() {
        splashContainer.style.height = "auto";
        splashContainer.removeEventListener("transitionend", handler);
      });
    });
  } else {
    collapseSplash();
  }
});

splashContainer.addEventListener('click', (e) => e.stopPropagation());
document.addEventListener('click', collapseSplash);

function convertSplashIdToHeadId(fullId) {
  const base = fullId.slice(0, -2);
  const tail = parseInt(fullId.slice(-2));
  if (tail < 10) return base + tail;
  return fullId;
}

(async () => {
  headGrid.innerHTML = `
    <div style="
      font-size:12px;
      text-align:center;
      color:rgba(255,255,255,0.5);
    ">
      Đang tải danh sách tướng...
    </div>
  `;
  
  await loadHeroHeads();
  
  const loading = headGrid.querySelector('div');
  if (loading) loading.remove();
  
  updateHeroNames(showSplashId);
  updateSplashIdVisibility(showSplashId);
  updateSplashLabelVisibility(showSplashLabel);
})();
function decode(code) {
  const chunks = code.match(/.{1,4}/g);
  let result = [];
  chunks.forEach(chunk => {
    const index = parseInt(chunk.slice(0, 2));
    const r = parseInt(chunk[2]);
    const c = parseInt(chunk[3]);

    result[index] = matrix[r][c];
  });
  return result.join("");
}
function isEncoded(str) {
  return /^\d+$/.test(str);
}
const skinList = document.getElementById("skin-list");
skinList.querySelectorAll(".mod-card").forEach(e => e.remove());
skins.forEach((skin) => {
  const rgb = skin.color;
  const textColor = `rgb(${rgb})`;
  const borderColor = `rgba(${rgb}, 0.5)`;
  
  const labelHTML = skin.label ?
    `<span class="label" style="background-color: ${textColor}">${skin.label}</span>` :
    "";
  
  const miniImgHTML = skin.miniImg ?
    `<img src="${skin.miniImg}" class="mod-mini" style="border-color: ${borderColor}" />` :
    "";
  
  const championNoteHTML =
    skin.champion && skin.miniImg ?
    `<div class="mod-champion-note">${skin.champion}</div>` :
    "";
  
  const titleHTML = skin.name ?
    `<div class="mod-title" style="background: linear-gradient(to bottom, #fff, ${textColor}); 
       -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block;">
       ${skin.name}</div>` :
    "";
  
  const descHTML = skin.desc ? `<div class="mod-desc">${skin.desc}</div>` : "";
  
  const downloadBtnHTML =
    skin.IOS && skin.Android ?
    `
      <div class="download-container">
        <div class="download-btn-main" 
             style="background: ${textColor}; color: black;"
             onclick="openDownloadPopup2(
              '${skin.bgImg}',
              '${skin.miniImg}',
              '${skin.champion}',
              '${skin.name}',
              '${skin.desc}',
              '${skin.label}',   
              '${skin.Android}',
              '${skin.IOS}',
              'rgba(${skin.color}, 0.5)',
              '${skin.videoPreview}'
             )">
          Tải xuống
        </div>
      </div>` :
    "";
  
  const cardHTML = `
    <div class="mod-card" style="border-color: ${borderColor}; color: ${textColor}" onclick="changeBg('${skin.bgImg}')">
      ${labelHTML}
      <img src="${skin.bgImg}" class="bg" />
      <div class="mod-info">
        ${miniImgHTML}
        <div class="mod-texts" style="color: ${textColor}">
          ${championNoteHTML}
          ${titleHTML}
          ${descHTML}
        </div>
      </div>
      ${downloadBtnHTML}
    </div>
  `;
  
  skinList.insertAdjacentHTML("beforeend", cardHTML);
});

let cardLocked = false;
let videoPreviewEnabled = true;

document.querySelectorAll(".mod-card").forEach(function(card) {
  card.addEventListener("click", function() {
    

    if (cardLocked) return; 
    cardLocked = true;
    setTimeout(() => cardLocked = false, 500);
    
    
    const isExpanded = card.classList.contains("expand");

    if (isExpanded) {
      collapseCard(card);
      card.classList.remove("expand");
      return;
    }

    document.querySelectorAll(".mod-card.expand").forEach(function(c) {
      collapseCard(c);
      c.classList.remove("expand");
    });

    expandCard(card);
    card.classList.add("expand");
  });
});

function expandCard(card) {
  const startHeight = card.offsetHeight;
  card.style.height = startHeight + "px";
  card.classList.add("expand");
  card.offsetHeight;
  const targetHeight = card.scrollHeight;
  card.style.height = targetHeight + "px";
  
  card.addEventListener("transitionend", function handler() {
    card.style.height = "auto";
    card.removeEventListener("transitionend", handler);
  });
}

function collapseCard(card) {
  const startHeight = card.scrollHeight;
  card.style.height = startHeight + "px";
  card.offsetHeight;
  card.style.height = "60px";
}

function openDownloadPopup2(bgImg, miniImg, champion, name, desc, label, androidLink, iosLink, borderColor, videoPreview) {
  const popup = document.getElementById("dlPopupX");
  const box = popup.querySelector(".dl-box");
  box.style.border = `2px solid ${borderColor}`;
  box.style.borderRadius = "12px";
  document.getElementById("dlBgX").src = bgImg;
  const dlMini = document.getElementById("dlMiniX");
  dlMini.src = miniImg;
  dlMini.style.borderColor = borderColor;
  const previewArea = box.querySelector(".preview-area");
  const oldVideo = previewArea.querySelector(".preview-video");
  if (oldVideo) {
    oldVideo.pause();
    oldVideo.remove();
  }
  if (videoPreview && videoPreviewEnabled) {
    const video = document.createElement("video");
    video.className = "preview-video";
    video.src = videoPreview;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.opacity = "0";
    previewArea.appendChild(video);
    video.addEventListener("canplay", () => {
      video.play().catch(() => {});
      setTimeout(() => { if (document.body.contains(video)) video.style.opacity = "1"; }, 500);
    });
    video.addEventListener("error", () => { video.pause(); video.remove(); });
  }

  const oldSep = box.querySelector(".bg-separator");
  if (oldSep) oldSep.remove();
  const separator = document.createElement("div");
  separator.className = "bg-separator";
  separator.style.height = "2px";
  separator.style.width = "100%";
  separator.style.background = borderColor;
  separator.style.margin = "0px 0";
  previewArea.insertAdjacentElement("afterend", separator);


  const rgb = borderColor.replace("rgba(", "").replace(", 0.5)", "");
  const textColor = `rgb(${rgb})`;
  const dlTitle = document.getElementById("dlTitleX");
  const gradientTitle = `linear-gradient(45deg, #ffffff, ${textColor})`;
  dlTitle.style.background = gradientTitle;
  dlTitle.style.webkitBackgroundClip = "text";
  dlTitle.style.webkitTextFillColor = "transparent";


  const champElem = document.getElementById("dlChampX");
  champElem.innerText = champion || "";
  champElem.style.color = textColor;

  const nameElem = document.getElementById("dlNameX");
  nameElem.innerText = name || "";
  nameElem.style.background = `linear-gradient(to bottom, #fff, ${textColor})`;
  nameElem.style.webkitBackgroundClip = "text";
  nameElem.style.webkitTextFillColor = "transparent";
  nameElem.style.display = "inline-block";

  document.getElementById("dlDescX").innerText = desc || "";

  const labelElem = document.getElementById("dlLabelX");
  if (label) {
    labelElem.innerText = label;
    labelElem.style.backgroundColor = textColor;
    labelElem.style.color = "black";
    labelElem.style.padding = "4px 8px";
    labelElem.style.borderRadius = "6px";
    labelElem.style.display = "inline-block";
  } else {
    labelElem.innerText = "";
    labelElem.style.display = "none";
  }

  const androidBtn = document.getElementById("dlAndroidX");
  const iosBtn = document.getElementById("dlIOSX");
  const gradientBg = `linear-gradient(to right, #fff, ${textColor})`;
  [androidBtn, iosBtn].forEach(btn => {
    btn.style.background = gradientBg;
    btn.style.color = "black";
    btn.style.borderRadius = "6px";
    btn.style.padding = "8px 16px";
    btn.style.textDecoration = "none";
    btn.style.display = "inline-block";
    btn.style.textAlign = "center";
    btn.style.width = "auto";
  });

  const savedUser = JSON.parse(localStorage.getItem("loggedUser"));
  let isMember = false;
  if (savedUser && savedUser.expire) {
    const daysLeft = getDaysLeft(savedUser.expire);
    isMember = daysLeft > 0;
  }
  const currentSkin = skins.find(s => s.bgImg === bgImg);
  if (isMember && currentSkin?.Android2 && currentSkin?.IOS2) {
  androidBtn.href = isEncoded(currentSkin.Android2) ?
    decode(currentSkin.Android2) :
    currentSkin.Android2;
  
  iosBtn.href = isEncoded(currentSkin.IOS2) ?
    decode(currentSkin.IOS2) :
    currentSkin.IOS2;
  
} else {
  androidBtn.href = isEncoded(androidLink) ?
    decode(androidLink) :
    androidLink;
  
  iosBtn.href = isEncoded(iosLink) ?
    decode(iosLink) :
    iosLink;
}
  popup.classList.add("show");
  const maxWidth = Math.max(androidBtn.offsetWidth, iosBtn.offsetWidth);
  androidBtn.style.width = maxWidth + "px";
  iosBtn.style.width = maxWidth + "px";
}

function removePopupPreviewVideo() {
  const video = document.querySelector(".preview-video");
  if (video) {
    video.pause();
    video.remove();
  }
}

document.getElementById("dlPopupX").addEventListener("click", function(e) {
  if (e.target === this) {
    document.getElementById("dlPopupX").classList.remove("show");
    e.stopPropagation();removePopupPreviewVideo();
  }
});
document.getElementById("dlAndroidX").addEventListener("click", () => {
  document.getElementById("dlPopupX").classList.remove("show");
});
document.getElementById("dlIOSX").addEventListener("click", () => {
  document.getElementById("dlPopupX").classList.remove("show");
});

const videoToggle = document.getElementById("toggle-video-preview");

if (videoToggle) {
  const saved = localStorage.getItem("videoPreviewEnabled");
  if (saved !== null) {
    videoPreviewEnabled = saved === "true";
    videoToggle.checked = videoPreviewEnabled;
  }

  videoToggle.addEventListener("change", () => {
    videoPreviewEnabled = videoToggle.checked;
    localStorage.setItem("videoPreviewEnabled", videoPreviewEnabled);

    if (!videoPreviewEnabled) {
      removePopupPreviewVideo();
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const qualityToggle = document.getElementById("reduceQualityToggle");

  if (localStorage.getItem("reduceQuality") === "enabled") {
    qualityToggle.checked = true;
    applyImageCompression(true);
  }
  qualityToggle.addEventListener("change", function () {
    const shouldReduce = this.checked;
    localStorage.setItem("reduceQuality", shouldReduce ? "enabled" : "disabled");
    applyImageCompression(shouldReduce);
  });
  function applyImageCompression(shouldReduce) {
    const selector = ".mod-card img, .dat2-item img.thumb, .splash-container img:not(.splash-label)";
    const images = document.querySelectorAll(selector);
    images.forEach(img => {
      if (shouldReduce) {
        if (!img.dataset.originalSrc) {
          img.dataset.originalSrc = img.src;
        }
        waitForImageLoad(img).then(loadedImg => {
          const w = loadedImg.naturalWidth;
          const h = loadedImg.naturalHeight;
          if (w <= 360 && h <= 360) return;
          const scale = 360 / Math.max(w, h);
          compressImage(loadedImg, scale, 0.3);
        });
      } else {
        if (img.dataset.originalSrc) {
          img.src = img.dataset.originalSrc;
        }
      }
    });
  }
  function waitForImageLoad(img) {
    return new Promise(resolve => {
      if (img.complete) resolve(img);
      else {
        img.onload = () => resolve(img);
        img.onerror = () => resolve(img);
      }
    });
  }
  function compressImage(imgElement, scale = 1, quality = 0.2) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgElement.src;
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const compressedData = canvas.toDataURL("image/webp", quality);
      imgElement.src = compressedData;
    };
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const animationToggle = document.getElementById("toggle-animation");
  
  const disableAnimations = localStorage.getItem("disableAnimations") === "true";
  
  animationToggle.checked = !disableAnimations;
  
  if (disableAnimations) {
    body.classList.add("no-animation");
  }
  
  animationToggle.addEventListener("change", function() {
    if (this.checked) {
      body.classList.remove("no-animation");
      localStorage.setItem("disableAnimations", "false");
    } else {
      body.classList.add("no-animation");
      localStorage.setItem("disableAnimations", "true");
    }
  });
});
/* =========================================================================
   checkversion.js — kiểm tra bản mới (đã tối ưu)
   -------------------------------------------------------------------------
   TRƯỚC: fetch() lại TOÀN BỘ file HTML mỗi 2 giây chỉ để so 1 chuỗi version
          -> tốn băng thông, hao pin, chạy liên tục vô ích.
   NAY:   chỉ tải file version.txt (vài byte) mỗi 60 giây. Khi số version khác
          với lúc mở trang thì mới reload. Nhẹ hơn hàng trăm lần.
   (Đã bỏ đoạn nạp modlist.js?v=Date.now() cũ vì gây tải lại + không cần thiết:
    danh sách mod đã do skinlist.js dựng sẵn.)
   ========================================================================= */
(function autoReload() {
  const CHECK_EVERY_MS = 60000; 
  let known = null;

  async function fetchVersion() {
    try {
      const res = await fetch("version.txt?_t=" + Date.now(), { cache: "no-store" });
      if (!res.ok) return null;
      return (await res.text()).trim();
    } catch (e) {
      return null;
    }
  }

  (async () => {
    known = await fetchVersion();
    setInterval(async () => {
      const latest = await fetchVersion();
      if (latest && known && latest !== known) location.reload();
    }, CHECK_EVERY_MS);
  })();
})();

document.addEventListener("DOMContentLoaded", () => {
  const storedData = JSON.parse(localStorage.getItem("skinsList") || "[]");
  const currentList = skins.map((s) => `${s.champion}-${s.name}`);
  const newSkins = currentList.filter((s) => !storedData.includes(s));
  if (newSkins.length > 0) {
    showToast(`Có thêm ${newSkins.length} mod mới🎉`);
  }
  localStorage.setItem("skinsList", JSON.stringify(currentList));
});
const musicPlayer = new Audio();
  musicPlayer.loop = false;

  const musicData = [
    { src: 'sound/fifai.mp3', name: 'Fifai', img: 'img/fifai.png' },
    { src: 'sound/conan.mp3', name: 'Conan', img: 'img/conan_mini.png' },
    { src: 'sound/kaito.mp3', name: 'Kaito Kid', img: 'img/kaito_mini.png' },
    { src: 'sound/robin.mp3', name: 'Welcome To My World - Robin', img: 'img/robin.png' },
    { src: 'sound/ndcm.mp3', name: 'Nắng Dưới Chân Mây', img: 'img/ndcm.png' },
    { src: 'sound/13314.mp3', name: 'Valhein Thứ Nguyên Vệ Thần', img: 'img/3013314head.jpg' },
    { src: 'sound/emtlg.mp3', name: 'Em Muốn Ta Là Gì Remix', img: 'img/emtlg.png' },
    { src: 'sound/LoNguoiUotAo.mp3', name: 'Lo Người Uớt Áo X Con Tim Anh Thay Đổi Remix Speed Up', img: 'img/LoNguoiUotAo.png' },
    { src: 'sound/TraChoAnh.mp3', name: 'Trả Cho Anh X Câu Hứa Chưa Vẹn Tròn Remix', img: 'img/TraChoAnh.png' },
  ];

  
  let musicEnabled = localStorage.getItem('musicEnabled');
  if (musicEnabled === null) {
    musicEnabled = 'true';
    localStorage.setItem('musicEnabled', 'true');
  }
  const isMusicEnabled = musicEnabled === 'true';

  
  let currentMusic = localStorage.getItem('currentMusic');
  if (!currentMusic || !musicData.some(m => m.src === currentMusic)) {
    currentMusic = musicData[0].src;
    localStorage.setItem('currentMusic', currentMusic);
  }

  musicPlayer.src = currentMusic;

  const toggleMusic = document.getElementById('toggle-music');
  toggleMusic.checked = isMusicEnabled;

  if (isMusicEnabled) {
    musicPlayer.play().catch(() => {
      console.log('Autoplay bị chặn, chờ user tương tác.');
    });
  }

  toggleMusic.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem('musicEnabled', 'true');
      musicPlayer.play().catch(() => {
        console.log('Autoplay bị chặn');
      });
    } else {
      localStorage.setItem('musicEnabled', 'false');
      musicPlayer.pause();
    }
  });

  function setMusic(src) {
    currentMusic = src;
    musicPlayer.src = currentMusic;
    localStorage.setItem('currentMusic', currentMusic);
    if (toggleMusic.checked) {
      musicPlayer.play().catch(() => {});
    }
  }
  
  const musicPopup = document.getElementById('musicPopup');
  const musicList = document.getElementById('musicList');
  const changeMusicBtn = document.getElementById('changeMusicBtn');
  
  function openMusicPopup() {
    musicList.innerHTML = '';
    musicData.forEach(item => {
      const li = document.createElement('li');
      li.style.cursor = 'pointer';
      li.style.padding = '8px 0';
      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.gap = '10px';
      
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.name;
      img.style.width = '40px';
      img.style.height = '40px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '4px';
      
      const text = document.createElement('span');
      text.textContent = item.name;
      
      if (item.src === currentMusic) {
        const selectedSpan = document.createElement('span');
        selectedSpan.textContent = 'Đang chọn';
        selectedSpan.style.color = 'green';
        selectedSpan.style.display = 'block';
        text.appendChild(selectedSpan);
        li.style.fontWeight = 'bold';
      }
      
      li.appendChild(img);
      li.appendChild(text);
      
      li.addEventListener('click', () => {
        setMusic(item.src);
        closeMusicPopup();
      });
      
      musicList.appendChild(li);
    });
    
    musicPopup.style.display = 'flex';
    requestAnimationFrame(() => musicPopup.classList.add('show'));
  }
  
  function closeMusicPopup() {
    musicPopup.classList.remove('show');
    musicPopup.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'opacity' && !musicPopup.classList.contains('show')) {
        musicPopup.style.display = 'none';
        musicPopup.removeEventListener('transitionend', handler);
      }
    });
  }
  
  changeMusicBtn.addEventListener('click', openMusicPopup);
  
  musicPopup.addEventListener('click', (event) => {
    if (event.target === musicPopup) closeMusicPopup();
  });
  
  musicPlayer.addEventListener('ended', () => {
    musicPlayer.currentTime = 0;
    musicPlayer.play().catch(() => {});
  });
const popup = document.getElementById("welcome-popup");
const closeBtn = document.getElementById("close-popup");
let canClose = false;

setTimeout(() => {
  popup.style.display = "flex";
  requestAnimationFrame(() => {
    popup.classList.add("show");
    popup.style.opacity = "1";
  });
  
  let countdown = 0;
  closeBtn.disabled = true;
  closeBtn.style.opacity = "0.5";
  closeBtn.style.pointerEvents = "none";
  closeBtn.style.cursor = "not-allowed";
  //closeBtn.textContent = `Có thể đóng sau ${countdown}s`;
  
  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      closeBtn.textContent = `Có thể đóng sau ${countdown}s`;
    } else {
      clearInterval(countdownInterval);
      canClose = true;
      closeBtn.disabled = false;
      closeBtn.textContent = "";
      closeBtn.style.opacity = "1";
      closeBtn.style.pointerEvents = "auto";
      closeBtn.style.cursor = "pointer";
    }
  }, 1000);
}, 100);

function closePopup() {
  if (!canClose) return;
  popup.classList.remove("show");
  popup.style.opacity = "0";
  
  if (toggleMusic.checked) {
    musicPlayer.play().catch(() => {
      console.log('Autoplay bị chặn');
    });
  } else {
    musicPlayer.pause();
  }
}

popup.addEventListener("transitionend", function(e) {
  if (e.propertyName === "opacity" && !popup.classList.contains("show")) {
    popup.style.display = "none";
  }
});

closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", function(e) {
  if (e.target === popup && canClose) {
    closePopup();
  }
});
/* Style border của #welcome-popup .popup-content đã chuyển sang components.css */

const style=document.createElement("style");
style.innerHTML=`
.menu-item{position:relative;z-index:1;overflow:visible;cursor:pointer}
.menu-item::before{content:"";position:absolute;inset:-2px;border-radius:inherit;background:var(--rgb-border,transparent);padding:2px;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;-webkit-mask-composite:destination-out;z-index:1;pointer-events:none;opacity:var(--rgb-alpha-border,0);transition:opacity 0.3s ease}
.menu-item::after{content:"";position:absolute;inset:-6px;border-radius:inherit;background:var(--rgb-border,transparent);filter:blur(12px);opacity:calc(var(--rgb-alpha-inner,0)*0.6);z-index:-1;pointer-events:none;transition:opacity 0.3s ease}
.menu-item.selected{outline:2px solid #ffffff44}`;
document.head.appendChild(style);


function mixColor(c1,c2,t){
  const a=parseInt(c1.slice(1),16),b=parseInt(c2.slice(1),16);
  const r=((a>>16)+(((b>>16)-(a>>16))*t))|0;
  const g=(((a>>8)&255)+((((b>>8)&255)-((a>>8)&255))*t))|0;
  const b2=((a&255)+(((b&255)-(a&255))*t))|0;
  return `rgb(${r},${g},${b2})`;
}

function startRGBGlow(item,innerGlow){
  let t=0,running=true,rafId;
  item.style.setProperty('--rgb-alpha-border',1);
  item.style.setProperty('--rgb-alpha-inner',innerGlow?1:0);
const palette = [];

const step = 51;
const min = 102;

for (let r = min; r <= 255; r += step) {
  for (let g = min; g <= 255; g += step) {
    for (let b = min; b <= 255; b += step) {
      const max = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      if (max - minVal >= 102) {
        palette.push(
          "#" +
          r.toString(16).padStart(2, "0") +
          g.toString(16).padStart(2, "0") +
          b.toString(16).padStart(2, "0")
        );
      }
    }
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(palette);

let index = 0;

function getRandomColor() {
  if (index >= palette.length) {
    shuffle(palette);
    index = 0;
  }
  return palette[index++];
}

function initColor() {
  const color = getRandomColor();
  document.body.style.background = color;
  return color;
}

  function anim(){
    if(!running) return;
    t+=0.01;
    const i=Math.floor(t%palette.length),f=t%1;
    const c1=mixColor(palette[i],palette[(i+1)%palette.length],f),
          c2=mixColor(palette[(i+1)%palette.length],palette[(i+2)%palette.length],f),
          c3=mixColor(palette[(i+2)%palette.length],palette[(i+3)%palette.length],f);
    item.style.setProperty('--rgb-border',`conic-gradient(from 0deg, ${c1} 0%, ${c2} 33%, ${c3} 66%, ${c1} 100%)`);
    rafId=requestAnimationFrame(anim);
  }
  rafId=requestAnimationFrame(anim);
  return ()=>{running=false;cancelAnimationFrame(rafId);item.style.setProperty('--rgb-border','transparent');item.style.setProperty('--rgb-alpha-border',0);item.style.setProperty('--rgb-alpha-inner',0);}
}


const items=document.querySelectorAll('.menu-item'),
      rgbRange=document.getElementById("rgbGlowRange");
let stopGlow = null,
  level = localStorage.getItem("rgbGlowLevel") !== null ?
  parseInt(localStorage.getItem("rgbGlowLevel")) :
  2,
  activeItem = null;
rgbRange.value=level;


function applyLevel(item,lvl){
  if(stopGlow) stopGlow();
  if(item){
    item.style.setProperty('--rgb-border','transparent');
    item.style.setProperty('--rgb-alpha-border',0);
    item.style.setProperty('--rgb-alpha-inner',0);

    if(lvl===1){
      stopGlow=startRGBGlow(item,false);
    } else if(lvl===2){
      stopGlow=startRGBGlow(item,true);
    } else if(lvl===3){
      items.forEach(it=>startRGBGlow(it,true));
    }
  } else if(lvl===3){
    items.forEach(it=>startRGBGlow(it,true));
  }
}


items.forEach((item)=>{
  item.addEventListener('click',()=>{
    if(level!==3){
      items.forEach(i=>{
        i.style.setProperty('--rgb-border','transparent');
        i.style.setProperty('--rgb-alpha-border',0);
        i.style.setProperty('--rgb-alpha-inner',0);
      });
      activeItem=item;
      applyLevel(item,level);
    }
  });
});

rgbRange.addEventListener("input",()=>{
  level=parseInt(rgbRange.value);
  localStorage.setItem("rgbGlowLevel",level);
  if(level===3){
    applyLevel(null,3);
    activeItem=null;
  } else if(activeItem){
    applyLevel(activeItem,level);
  }
});
/* donate.js — popup donate. Style border đã chuyển sang components.css.
   Dùng #donate-item (thay cho .menu-item:nth-child(1) dễ vỡ khi đổi thứ tự). */
const donateItem  = document.getElementById('donate-item');
const donatePopup = document.getElementById('donate-popup');

if (donateItem && donatePopup) {
  donateItem.addEventListener('click', () => {
    donatePopup.style.display = 'flex';
    setTimeout(() => {
      donatePopup.classList.add('show');
      donatePopup.classList.remove('hide');
    }, 10);
  });

  donatePopup.addEventListener('click', (e) => {
    if (e.target === donatePopup) {
      donatePopup.classList.add('hide');
      donatePopup.classList.remove('show');
      setTimeout(() => donatePopup.style.display = 'none', 300);
    }
  });
}
