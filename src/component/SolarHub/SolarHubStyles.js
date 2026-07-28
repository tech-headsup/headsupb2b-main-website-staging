export default function SolarHubStyles() {
  return (
    <style jsx global>{`
      .services-page {
        --bg: #ffffff;
        --bg-card: #ffffff;
        --bg-elevated: #f4f1fa;
        --bg-glass: rgba(255, 255, 255, 0.75);
        --teal: #5e3f99;
        --teal-dim: rgba(94, 63, 153, 0.1);
        --teal-glow: rgba(94, 63, 153, 0.28);
        --amber: #5e3f99;
        --amber-dim: rgba(94, 63, 153, 0.1);
        --purple: #5e3f99;
        --purple-dim: rgba(94, 63, 153, 0.1);
        --rose: #5e3f99;
        --rose-dim: rgba(94, 63, 153, 0.1);
        --sky: #5e3f99;
        --sky-dim: rgba(94, 63, 153, 0.1);
        --lime: #5e3f99;
        --lime-dim: rgba(94, 63, 153, 0.1);
        --white: #1a1a1a;
        --gray-100: #2a2a2a;
        --gray-300: #404040;
        --gray-500: #6b6b6b;
        --gray-700: #9a9a9a;
        --border: rgba(94, 63, 153, 0.14);
        --border-hover: rgba(94, 63, 153, 0.3);

        font-family: "Montserrat", sans-serif;
        background: var(--bg);
        color: var(--gray-300);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
      }
      /* Vendor section keeps the dark purple panel — re-override so descendants render white */
      .services-page .vendor-section {
        --white: #ffffff;
        --gray-100: #ffffff;
        --gray-300: #ffffff;
        --gray-500: #ffffff;
        --gray-700: rgba(255, 255, 255, 0.55);
        --teal: #b2a9c6;
        --teal-dim: rgba(178, 169, 198, 0.18);
        --teal-glow: rgba(178, 169, 198, 0.4);
        --bg-card: #4a3175;
        --bg-elevated: #553890;
        --border: rgba(255, 255, 255, 0.14);
        --border-hover: rgba(255, 255, 255, 0.24);
        color: #ffffff;
      }
      .services-page * {
        box-sizing: border-box;
      }
      .services-page .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 48px;
      }
      @media (max-width: 768px) {
        .services-page .container {
          padding: 0 20px;
        }
      }

      .services-page .hero {
        margin-top: 0;
        min-height: auto;
        padding: 72px 0 48px;
        display: flex;
        align-items: center;
        position: relative; border-radius: 6px;
        overflow: hidden;
      }
      .services-page .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 60% at 20% 80%, rgba(178, 169, 198, 0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 20%, rgba(94, 63, 153, 0.1) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 50% 50%, rgba(178, 169, 198, 0.1) 0%, transparent 60%);
      }
      .services-page .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        animation: services-float 20s ease-in-out infinite;
      }
      .services-page .orb-1 {
        width: 400px;
        height: 400px;
        background: rgba(178, 169, 198, 0.18);
        top: 10%;
        left: -5%;
        animation-delay: 0s;
      }
      .services-page .orb-2 {
        width: 300px;
        height: 300px;
        background: rgba(94, 63, 153, 0.08);
        top: 60%;
        right: -5%;
        animation-delay: -7s;
      }
      .services-page .orb-3 {
        width: 250px;
        height: 250px;
        background: rgba(178, 169, 198, 0.14);
        bottom: 10%;
        left: 40%;
        animation-delay: -14s;
      }
      @keyframes services-float {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -20px) scale(1.05); }
        66% { transform: translate(-20px, 15px) scale(0.95); }
      }

      .services-page .hero-grid {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 1.25fr;
        align-items: center;
        gap: 40px;
        width: 100%;
      }
      .services-page .hero-content {
        position: relative;
        z-index: 2;
      }
      .services-page .hero-image {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        background: transparent;
      }
      .services-page .hero-image img {
        width: 115% !important;
        max-width: 115%;
        height: auto;
        transform: translateX(2%);
        border: none;
        outline: none;
        box-shadow: none;
        display: block;
      }
      .services-page .hero-image span,
      .services-page .hero-image > * {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        background: transparent !important;
      }
      @media (max-width: 1280px) {
        .services-page .hero-image img {
          width: 105% !important;
          max-width: 105%;
          transform: translateX(0);
        }
      }
      @media (max-width: 1024px) {
        .services-page .hero {
          height: auto;
          min-height: auto;
          padding: 72px 0 40px;
        }
        .services-page .hero-grid {
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .services-page .hero-image {
          order: 2;
        }
        .services-page .hero-image img {
          width: 100% !important;
          max-width: 560px;
          transform: none;
          margin: 0 auto;
        }
        .services-page .hero-content {
          text-align: center;
        }
        .services-page .hero .subtitle {
          margin-left: auto;
          margin-right: auto;
        }
        .services-page .hero-btns {
          margin-left: auto;
          margin-right: auto;
        }
      }
      .services-page .hero-pill {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: var(--teal-dim);
        border: 1px solid rgba(94, 63, 153, 0.25);
        padding: 8px 20px;
        border-radius: 100px;
        font-size: 13px;
        font-weight: 600;
        color: #5e3f99;
        margin-bottom: 32px;
        animation: services-slideUp 0.7s ease-out;
      }
      .services-page .hero-pill .live-dot {
        width: 8px;
        height: 8px;
        background: var(--teal);
        border-radius: 50%;
        box-shadow: 0 0 8px var(--teal);
        animation: services-blink 2s infinite;
      }
      @keyframes services-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      .services-page .hero h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 60px;
        font-weight: 900;
        line-height: 1;
        color: var(--white);
        letter-spacing: -1.5px;
        margin-bottom: 22px;
        animation: services-slideUp 0.7s ease-out 0.1s both;
      }
      .services-page .hero h1 .gradient-text {
        background: linear-gradient(135deg, #5e3f99 0%, #b2a9c6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .services-page .hero h1 .yellow-highlight {
        color: #f5c518;
      }
      .services-page .hero .subtitle {
        font-size: 16px;
        line-height: 1.65;
        color: var(--gray-300);
        max-width: 580px;
        margin-bottom: 32px;
        animation: services-slideUp 0.7s ease-out 0.2s both;
      }
      .services-page .hero-btns {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 14px;
        animation: services-slideUp 0.7s ease-out 0.3s both;
        max-width: 480px;
      }
      @media (min-width: 640px) {
        .services-page .hero-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
      }
      .services-page .btn-glow,
      .services-page .btn-outline {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding: 13px 24px;
        border-radius: 10px;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        text-decoration: none;
        white-space: nowrap;
        transition: all 0.3s;
        cursor: pointer;
      }
      .services-page .btn-glow {
        background: #00d4f5;
        color: #ffffff;
        font-weight: 700;
        border: none;
        box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
        letter-spacing: 0.3px;
      }
      .services-page .btn-glow:hover {
        background: #00bcd9;
        box-shadow: 0 8px 28px rgba(0, 212, 245, 0.45), 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }
      .services-page .btn-outline {
        background: #00d4f5;
        border: none;
        color: #ffffff;
        font-weight: 700;
        box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
        letter-spacing: 0.3px;
      }
      .services-page .btn-outline:hover {
        background: #00bcd9;
        box-shadow: 0 8px 28px rgba(0, 212, 245, 0.45), 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }

      .services-page .stats-section {
        padding: 48px 0 24px;
      }
      .services-page .hero-stats-wrap {
        display: flex;
        justify-content: center;
      }
      .services-page .hero-stats {
        display: flex;
        align-items: stretch;
        border-radius: 16px;
        overflow: hidden;
        width: 100%;
        max-width: 1000px;
      }
      .services-page .hero-stat {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        padding: 24px 20px;
        cursor: default;
        transition: background 0.2s ease, border-radius 0.2s ease;
      }
      .services-page .hero-stat-val {
        font-size: 32px;
        font-weight: 800;
        line-height: 1;
        margin-bottom: 8px;
        letter-spacing: -0.5px;
        white-space: nowrap;
        transition: color 0.2s ease;
      }
      .services-page .hero-stat-lbl {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.3;
        white-space: pre-line;
        transition: color 0.2s ease;
      }

      @keyframes services-slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .services-page .audience-bar {
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        padding: 40px 0;
        background: #faf8ff;
      }
      .services-page .audience-row {
        display: flex;
        align-items: center;
        gap: 32px;
      }
      .services-page .audience-label {
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--teal);
        white-space: nowrap;
        min-width: 90px;
      }
      .services-page .audience-chips {
        display: flex;
        gap: 12px;
        flex: 1;
        flex-wrap: wrap;
      }
      .services-page .audience-chip {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--bg-elevated);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 12px 20px;
        flex: 1;
        min-width: 170px;
        transition: border-color 0.3s, transform 0.3s;
      }
      .services-page .audience-chip:hover {
        border-color: var(--border-hover);
        transform: translateY(-2px);
      }
      .services-page .chip-icon {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        flex-shrink: 0;
      }
      .services-page .chip-icon.c1,
      .services-page .chip-icon.c2,
      .services-page .chip-icon.c3,
      .services-page .chip-icon.c4 {
        background: rgba(94, 63, 153, 0.18);
      }
      .services-page .audience-chip h5 {
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
        font-weight: 700;
        color: var(--white);
        margin: 0;
      }
      .services-page .audience-chip p {
        font-size: 11px;
        color: var(--gray-500);
        margin: 1px 0 0;
      }

      .services-page .section {
        padding: 120px 0;
      }
      .services-page .section-no-top {
        padding-top: 0;
      }
      .services-page .section-tight-top {
        padding-top: 20px;
      }
      .services-page .sec-header {
        text-align: center;
        margin-bottom: 32px;
      }
      .services-page .sec-tag {
        display: inline-block;
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--teal);
        margin-bottom: 16px;
      }
      .services-page .sec-header h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 40px;
        font-weight: 800;
        color: #111;
        letter-spacing: -0.8px;
        margin: 0 0 8px;
        line-height: 1.15;
      }
      .services-page .sec-header p {
        font-size: 17px;
        color: var(--gray-300);
        max-width: 620px;
        margin: 4px auto 0;
        line-height: 1.4;
      }

      .services-page .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      @media (max-width: 1024px) {
        .services-page .services-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
      }
      @media (max-width: 600px) {
        .services-page .services-grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }
      }

      .services-page .audience-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .services-page .audience-card {
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 16px;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 16px;
        cursor: default;
        transition: box-shadow 0.2s ease, border-color 0.2s ease;
      }
      .services-page .audience-card:hover {
        box-shadow: 0 8px 30px rgba(74, 55, 114, 0.1);
        border-color: #c5b8e8;
      }
      .services-page .audience-card-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        flex-shrink: 0;
      }
      .services-page .audience-card h4 {
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: #111111;
        margin: 0;
        line-height: 1.3;
        width: 100%;
      }
      @media (max-width: 768px) {
        .services-page .audience-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
      }

      .services-page .kits-carousel {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
      }
      .services-page .kits-viewport {
        overflow: hidden;
      }
      .services-page .kits-track {
        display: flex;
        transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 -10px;
      }
      .services-page .kit-slot {
        padding: 4px 10px;
        box-sizing: border-box;
      }
      .services-page .kit-card {
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100%;
        transition: box-shadow 0.2s ease, border-color 0.2s ease;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
      }
      .services-page .kit-card:hover {
        box-shadow: 0 8px 30px rgba(74, 55, 114, 0.1);
        border-color: #c5b8e8;
      }
      .services-page .kit-img {
        position: relative;
        width: calc(100% - 24px);
        margin: 12px 12px 0;
        aspect-ratio: 4 / 3;
        border-radius: 12px;
        background-color: #f5f2fb;
        background-image: repeating-linear-gradient(
          135deg,
          transparent 0,
          transparent 10px,
          rgba(94, 63, 153, 0.18) 10px,
          rgba(94, 63, 153, 0.18) 11px
        );
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .services-page .kit-img.has-image {
        background: #ffffff;
        background-image: none;
      }
      .services-page .kit-img.has-image img {
        object-fit: contain !important;
        object-position: center !important;
        padding: 12px !important;
      }
      .services-page .kit-img-label {
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2px;
        color: #9b8ec4;
      }
      .services-page .kit-body {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        flex: 1;
        background: #faf8ff;
        margin-top: 12px;
      }
      .services-page .kit-power {
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        font-weight: 700;
        color: #5e3f99;
        letter-spacing: 0.4px;
      }
      .services-page .kit-title {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #111;
        margin: 0;
        line-height: 1.3;
      }
      .services-page .kit-desc {
        font-family: "DM Sans", sans-serif;
        font-size: 13px;
        color: #666;
        line-height: 1.5;
        margin: 4px 0 10px;
        flex: 1;
      }
      .services-page .kit-view {
        align-self: flex-start;
        display: inline-flex;
        align-items: center;
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #000000;
        background: #80EBF7;
        padding: 10px 20px;
        border-radius: 12px;
        letter-spacing: 0.05em;
        text-decoration: none;
        margin-top: auto;
      }
      .services-page .kit-dots {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-top: 28px;
      }
      .services-page .kit-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: none;
        background: #cfc7e6;
        padding: 0;
        cursor: pointer;
        transition: background 0.2s ease;
      }
      .services-page .kit-dot.active {
        background: #4a3175;
      }
      .services-page .kit-dot:hover {
        background: #b2a9c6;
      }
      .services-page .kit-dot.active:hover {
        background: #4a3175;
      }
      .services-page .s-card {
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 16px;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 16px;
        cursor: default;
        transition: box-shadow 0.2s ease, border-color 0.2s ease;
      }
      .services-page .s-card:hover {
        box-shadow: 0 8px 30px rgba(74, 55, 114, 0.1);
        border-color: #c5b8e8;
      }
      .services-page .s-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        flex-shrink: 0;
      }
      .services-page .s-card h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: #111111;
        margin: 0;
        line-height: 1.3;
        width: 100%;
      }
      .services-page .s-card p {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        color: #555555;
        line-height: 1.55;
        margin: 0;
        width: 100%;
      }

      .services-page .products-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
        width: 100%;
      }
      @media (max-width: 640px) {
        .services-page .products-container {
          padding: 0 16px;
        }
      }
      .services-page .how-wrap {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 24px;
        padding: 32px 24px 40px;
        max-width: 1280px;
        margin: 0 auto;
        width: 100%;
      }
      @media (min-width: 768px) {
        .services-page .how-wrap {
          padding: 32px 40px 40px;
        }
      }
      .services-page .how-wrap .sec-header {
        margin-bottom: 28px;
      }
      .services-page .how-wrap .sec-header h2 {
        margin: 0 0 8px;
        line-height: 1.15;
      }
      .services-page .how-wrap .sec-header p {
        margin: 4px auto 0;
        line-height: 1.4;
      }
      .services-page .how-pills {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 14px 18px;
        margin: 32px auto 0;
        max-width: 960px;
      }
      .services-page .how-pill {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 11px 24px;
        border-radius: 999px;
        background: rgba(0, 212, 245, 0.12);
        box-shadow: none;
        text-shadow: none;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #00d4f5;
        letter-spacing: 0.1px;
        white-space: nowrap;
      }
      .services-page .how-pill-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #00d4f5;
        flex-shrink: 0;
      }
      @media (max-width: 640px) {
        .services-page .how-pills {
          gap: 10px;
          margin: 40px auto 0;
        }
        .services-page .how-pill {
          font-size: 13px;
          padding: 9px 18px;
        }
      }

      .services-page .faq-container,
      .services-page .kc-container,
      .services-page .stats-container,
      .services-page .kits-container,
      .services-page .hero-container,
      .services-page .how-container,
      .services-page .cta-container,
      .services-page .tp-container,
      .supporting-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
        width: 100%;
      }
      @media (min-width: 768px) {
        .services-page .faq-container,
        .services-page .kc-container,
        .services-page .stats-container,
        .services-page .kits-container,
        .services-page .hero-container,
        .services-page .how-container,
        .services-page .cta-container,
        .supporting-container {
          padding: 0 48px;
        }
      }
      @media (min-width: 1024px) {
        .services-page .faq-container,
        .services-page .kc-container,
        .services-page .stats-container,
        .services-page .kits-container,
        .services-page .hero-container,
        .services-page .how-container,
        .services-page .cta-container,
        .supporting-container {
          padding: 0 32px;
        }
      }
      .services-page .faq-custom-head > div > .flex.flex-col.items-center {
        display: none !important;
      }
      .services-page .faq-head {
        text-align: center;
        margin-bottom: 12px;
      }
      .services-page .faq-heading {
        font-family: "Montserrat", sans-serif;
        font-size: 40px;
        font-weight: 800;
        color: #111;
        letter-spacing: -0.8px;
        margin: 0 0 8px;
        line-height: 1.15;
      }
      .services-page .faq-sub {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        color: #666;
        margin: 0;
      }
      @media (max-width: 640px) {
        .services-page .faq-heading {
          font-size: 26px;
        }
      }
      .services-page .faq-gap [data-radix-accordion-trigger],
      .services-page .faq-gap button[aria-controls] {
        border: 1px solid #e5e5e5 !important;
        box-shadow: none !important;
      }
      .services-page .faq-gap .group > button {
        border: 1px solid #e5e5e5 !important;
        box-shadow: none !important;
      }
      .services-page .faq-gap .group [class*="AccordionContent"],
      .services-page .faq-gap .group > div[data-state="open"] {
        border-left: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
      }
      .services-page .faq-gap button[aria-controls] > svg {
        display: none !important;
      }

      .services-page .tp-wrap {
        text-align: center;
      }
      .services-page .tp-partners-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 24px 40px;
        margin: 32px auto 0;
        max-width: 1100px;
      }
      .services-page .tp-partner-name {
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #4A3772;
        letter-spacing: 0.2px;
        white-space: nowrap;
      }
      @media (max-width: 640px) {
        .services-page .tp-partners-row {
          gap: 14px 22px;
        }
        .services-page .tp-partner-name {
          font-size: 15px;
        }
      }
      .services-page .tp-certs {
        margin-top: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 14px;
      }
      .services-page .tp-certs .tp-heading {
        margin: 0 0 8px;
      }
      .services-page .tp-certs .tp-sub {
        margin: 0 0 20px;
      }
      .services-page .tp-certs-tag {
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #888;
      }
      .services-page .tp-certs-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px 12px;
      }
      .services-page .tp-cert-chip {
        display: inline-flex;
        align-items: center;
        font-family: "DM Sans", sans-serif;
        font-size: 12px;
        font-weight: 700;
        color: #4A3772;
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 999px;
        padding: 7px 14px;
        letter-spacing: 0.3px;
        white-space: nowrap;
      }
      @media (max-width: 640px) {
        .services-page .tp-certs {
          align-items: center;
        }
        .services-page .tp-certs-list {
          justify-content: center;
        }
      }
      .services-page .tp-wrap .section_heading {
        display: none;
      }
      .services-page .tp-marquee {
        margin: 24px auto 0;
        max-width: 100%;
      }
      .services-page .tp-marquee .rfm-marquee-container {
        width: 100%;
      }
      .services-page .tp-logo-slot {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 130px;
        height: 50px;
        margin: 0 12px;
        filter: grayscale(100%);
        transition: filter 0.3s ease;
      }
      .services-page .tp-logo-slot:hover {
        filter: grayscale(0%);
      }
      .services-page .tp-heading {
        font-family: "Montserrat", sans-serif;
        font-size: 40px;
        font-weight: 800;
        color: #111;
        letter-spacing: -0.8px;
        margin: 0 0 8px;
        line-height: 1.15;
      }
      .services-page .tp-sub {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        color: #666;
        margin: 0 0 32px;
        line-height: 1.55;
      }
      @media (max-width: 640px) {
        .services-page .tp-heading {
          font-size: 26px;
        }
        .services-page .tp-sub {
          font-size: 14px;
          margin-bottom: 24px;
        }
      }

      .services-page .kc-section {
        background: #f4f2f9;
        padding-top: 64px;
        padding-bottom: 64px;
      }
      .services-page .kc-wrap {
        max-width: 1200px;
        margin: 0 auto;
      }
      .services-page .kc-section .sec-header {
        margin-bottom: 12px;
      }
      .services-page .kc-section .sec-header h2 {
        margin: 0 0 8px;
      }
      .services-page .kc-section .sec-header p {
        margin: 4px auto 0;
        line-height: 1.4;
      }
      .services-page .kc-head {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 8px;
        margin-bottom: 32px;
        position: relative;
      }
      .services-page .kc-head-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 8px;
      }
      .services-page .kc-footer {
        display: flex;
        justify-content: center;
        margin-top: 28px;
      }
      .services-page .kc-tag {
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #5e3f99;
      }
      .services-page .kc-head-left h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 30px;
        font-weight: 800;
        color: #111;
        letter-spacing: -0.6px;
        margin: 0;
        line-height: 1.15;
      }
      .services-page .kc-more {
        display: inline-flex;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #ffffff;
        text-decoration: none;
        white-space: nowrap;
        background: #4A3772;
        border: 1.5px solid #4A3772;
        border-radius: 999px;
        padding: 12px 26px;
        transition: background 0.2s ease, transform 0.2s ease;
      }
      .services-page .kc-more:hover {
        transform: translateY(-1px);
      }
      .services-page .kc-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .services-page .kc-card {
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid #e5e5e5;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: inherit;
        transition: box-shadow 0.2s ease, border-color 0.2s ease;
      }
      .services-page .kc-card:hover {
        box-shadow: 0 8px 30px rgba(74, 55, 114, 0.1);
        border-color: #c5b8e8;
      }
      .services-page .kc-img {
        position: relative;
        width: 100%;
        aspect-ratio: 1200 / 630;
        margin: 12px 12px 0;
        width: calc(100% - 24px);
        border-radius: 16px;
        background-color: #eeeaf7;
        background-image: repeating-linear-gradient(
          135deg,
          transparent 0,
          transparent 10px,
          rgba(94, 63, 153, 0.18) 10px,
          rgba(94, 63, 153, 0.18) 11px
        );
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        isolation: isolate;
      }
      .services-page .kc-img.has-image {
        background: transparent;
        aspect-ratio: 1200 / 630;
        display: block;
        padding: 0;
        border-radius: 16px;
      }
      .services-page .kc-img.has-image img {
        width: 100% !important;
        height: 100% !important;
        object-fit: fill !important;
        object-position: center !important;
        display: block;
        border-radius: 16px !important;
      }
      .services-page .kc-img-label {
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        letter-spacing: 1px;
        color: #9b8ec4;
      }
      .services-page .kc-body {
        padding: 18px 20px 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
      }
      .services-page .kc-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }
      .services-page .kc-date {
        font-family: "DM Sans", sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: #6b6b6b;
      }
      .services-page .kc-chip {
        align-self: flex-start;
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.3px;
        padding: 5px 12px;
        border-radius: 6px;
      }
      .services-page .kc-chip-research {
        background: #ede9ff;
        color: #5e3f99;
      }
      .services-page .kc-chip-blog {
        background: #e6f1ff;
        color: #2f6bd1;
      }
      .services-page .kc-title {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #111;
        line-height: 1.35;
        margin: 2px 0 4px;
      }
      .services-page .kc-read {
        align-self: flex-start;
        display: inline-flex;
        align-items: center;
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #000000;
        background: #80EBF7;
        padding: 10px 20px;
        border-radius: 12px;
        letter-spacing: 0.05em;
        margin-top: auto;
      }
      @media (max-width: 1024px) {
        .services-page .kc-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 640px) {
        .services-page .kc-section {
          padding-top: 24px;
          padding-bottom: 32px;
        }
        .services-page .kc-head {
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }
        .services-page .kc-head-left h2 {
          font-size: 24px;
        }
        .services-page .kc-grid {
          grid-template-columns: 1fr;
        }
      }

      .services-page .cta-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
      .services-page .cta-cards.cta-single {
        grid-template-columns: 1fr;
      }
      .services-page .cta-cards.cta-single .cta-card {
        align-items: center;
        text-align: center;
      }
      .services-page .cta-cards.cta-single .cta-btns {
        justify-content: center;
      }
      .services-page .cta-card {
        border-radius: 20px;
        padding: 36px 36px 32px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .services-page .cta-buyer {
        background: #4a3175;
        color: #ffffff;
      }
      .services-page .cta-supplier {
        background: #ffffff;
        border: 1px solid #e5e5e5;
        color: #111;
      }
      .services-page .cta-tag {
        font-family: "Montserrat", sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 3px;
        color: #b2a9c6;
      }
      .services-page .cta-tag-light {
        color: #5e3f99;
      }
      .services-page .cta-card h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: -0.4px;
        line-height: 1.2;
        margin: 4px 0 0;
      }
      .services-page .cta-buyer h3 {
        color: #ffffff;
      }
      .services-page .cta-supplier h3 {
        color: #111;
      }
      .services-page .cta-card p {
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        line-height: 1.55;
        margin: 0 0 12px;
      }
      .services-page .cta-buyer p {
        color: rgba(255, 255, 255, 0.75);
      }
      .services-page .cta-supplier p {
        color: #555;
      }
      .services-page .cta-btns {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: auto;
      }
      .services-page .cta-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 22px;
        border-radius: 8px;
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
      }
      .services-page .cta-btn-mint {
        background: #80EBF7;
        color: #1a1a2e;
        border: none;
        border-radius: 999px;
        padding: 10px 24px;
        font-weight: 700;
      }
      .services-page .cta-btn-mint:hover {
        background: #6ee2f0;
        transform: translateY(-1px);
      }
      .services-page .cta-btn-outline {
        background: transparent;
        color: #ffffff;
        border: 1.5px solid rgba(255, 255, 255, 0.5);
        border-radius: 999px;
        padding: 10px 24px;
        font-weight: 700;
        cursor: pointer;
      }
      .services-page .cta-btn-outline:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #ffffff;
        transform: translateY(-1px);
      }
      @media (max-width: 768px) {
        .services-page .cta-cards {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .services-page .cta-card {
          padding: 28px 24px;
        }
        .services-page .cta-card h3 {
          font-size: 20px;
        }
      }

      .services-page .steps-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        position: relative;
      }
      .services-page .steps-row::before {
        content: "";
        position: absolute;
        top: 32px;
        left: 10%;
        right: 10%;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(94, 63, 153, 0.18), var(--teal), rgba(94, 63, 153, 0.18), transparent);
      }
      .services-page .step-item {
        text-align: center;
        position: relative;
        z-index: 1;
      }
      .services-page .step-num {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 800;
        color: #ffffff;
        background: var(--teal);
        box-shadow: 0 8px 24px rgba(94, 63, 153, 0.35);
        transition: transform 0.3s;
      }
      .services-page .step-num.alt {
        background: var(--bg-elevated);
        border: 2px solid rgba(94, 63, 153, 0.35);
        color: var(--white);
        box-shadow: none;
      }
      .services-page .step-item:hover .step-num {
        transform: scale(1.1);
      }
      .services-page .step-item h4 {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: var(--white);
        margin: 0 0 8px;
      }
      .services-page .step-item p {
        font-size: 13px;
        color: var(--gray-300);
        line-height: 1.55;
        margin: 0;
      }

      .services-page .vendor-section {
        background: linear-gradient(160deg, #4a3175 0%, #5e3f99 50%, #3a2a5f 100%);
        border: 1px solid rgba(178, 169, 198, 0.22);
        border-radius: 28px;
        padding: 80px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        position: relative;
        overflow: hidden;
      }
      .services-page .vendor-section::before {
        content: "";
        position: absolute;
        top: -200px;
        right: -200px;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(178, 169, 198, 0.18) 0%, transparent 70%);
        border-radius: 50%;
      }
      .services-page .vendor-section::after {
        content: "";
        position: absolute;
        bottom: -150px;
        left: -150px;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
        border-radius: 50%;
      }
      .services-page .v-left {
        position: relative;
        z-index: 2;
      }
      .services-page .v-left h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 44px;
        font-weight: 800;
        color: var(--white);
        line-height: 1.1;
        letter-spacing: -1px;
        margin: 0 0 20px;
      }
      .services-page .v-left h2 .hl {
        color: var(--teal);
      }
      .services-page .v-left > p {
        font-size: 16px;
        color: #ffffff;
        line-height: 1.7;
        margin: 0 0 36px;
      }
      .services-page .v-benefits {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .services-page .v-benefit {
        display: flex;
        align-items: flex-start;
        gap: 14px;
      }
      .services-page .vb-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: #00d4f5;
        box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 18px;
      }
      .services-page .vb-text h5 {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: var(--white);
        margin: 0 0 2px;
      }
      .services-page .vb-text p {
        font-size: 13px;
        color: #ffffff;
        line-height: 1.5;
        margin: 0;
      }

      .services-page .v-form {
        position: relative;
        z-index: 2;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 20px;
        padding: 40px;
      }
      .services-page .v-form h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0 0 6px;
      }
      .services-page .v-form > p {
        font-size: 13px;
        color: #555555;
        margin: 0 0 28px;
      }
      .services-page .f-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      .services-page .f-group {
        margin-bottom: 20px;
      }
      .services-page .v-form .f-group label {
        display: block;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: #1f2937;
        letter-spacing: 0;
        text-transform: none;
        margin-bottom: 4px;
      }
      .services-page .v-form .f-group input,
      .services-page .v-form .f-group select,
      .services-page .v-form .f-group textarea {
        width: 100%;
        background: #ffffff;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        padding: 8px 16px;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        color: #1f2937;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .services-page .v-form .f-group textarea {
        padding: 12px 16px;
      }
      .services-page .v-form .f-group input::placeholder,
      .services-page .v-form .f-group textarea::placeholder {
        color: #9ca3af;
        font-family: "Montserrat", sans-serif;
      }
      .services-page .v-form .f-group input:focus,
      .services-page .v-form .f-group select:focus,
      .services-page .v-form .f-group textarea:focus {
        border-color: transparent;
        box-shadow: 0 0 0 2px #4b5563;
      }
      .services-page .v-form .f-group select {
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%235E3F99' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 14px center;
      }
      .services-page .v-form .f-group select option {
        background: #ffffff;
        color: #1a1a1a;
      }
      .services-page .btn-submit-glow {
        width: 100%;
        background: #00d4f5;
        color: #ffffff;
        padding: 15px 32px;
        border: none;
        border-radius: 10px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 6px;
        letter-spacing: 0.3px;
        box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
      }
      .services-page .btn-submit-glow:hover {
        background: #00bcd9;
        box-shadow: 0 8px 28px rgba(0, 212, 245, 0.5);
        transform: translateY(-2px);
      }
      .services-page .btn-submit-glow:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
      .services-page .form-status {
        font-size: 13px;
        padding: 12px 14px;
        border-radius: 8px;
        margin-bottom: 14px;
        line-height: 1.5;
      }
      .services-page .form-status-success {
        background: rgba(0, 212, 245, 0.12);
        border: 1px solid rgba(0, 212, 245, 0.45);
        color: #066b7d;
      }
      .services-page .form-status-error {
        background: rgba(244, 63, 94, 0.12);
        border: 1px solid rgba(244, 63, 94, 0.45);
        color: #b1233b;
      }

      .services-page .trust-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
      .services-page .trust-item {
        text-align: center;
        padding: 36px 20px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 16px;
        transition: border-color 0.3s, transform 0.3s;
      }
      .services-page .trust-item:hover {
        border-color: var(--border-hover);
        transform: translateY(-4px);
      }
      .services-page .trust-item .t-num {
        font-family: "Montserrat", sans-serif;
        font-size: 42px;
        font-weight: 900;
        color: var(--white);
        letter-spacing: -2px;
      }
      .services-page .trust-item .t-num span {
        color: var(--teal);
      }
      .services-page .trust-item .t-lbl {
        font-size: 13px;
        color: var(--gray-500);
        font-weight: 700;
        margin-top: 4px;
      }

      @media (max-width: 1100px) {
        .services-page .hero h1 {
          font-size: 52px;
        }
        .services-page .vendor-section {
          grid-template-columns: 1fr;
          padding: 56px 40px;
        }
      }
      @media (max-width: 768px) {
        .services-page .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .services-page .hero-stat {
          flex: none;
          width: auto;
          padding: 18px 12px;
          min-width: 0;
        }
        .services-page .hero-stat-val {
          font-size: 20px;
          white-space: normal;
          word-break: break-word;
        }
        .services-page .hero-stat-lbl {
          font-size: 12px;
        }
        .services-page .hero {
          min-height: auto;
          height: auto;
          padding: 64px 0 32px;
          margin-top: 0;
        }
        .services-page .hero-grid {
          gap: 24px;
        }
        .services-page .hero h1 {
          font-size: 36px;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .services-page .hero .subtitle {
          font-size: 15px;
          margin-bottom: 24px;
        }
        .services-page .sec-header h2 {
          font-size: 30px;
        }
        .services-page .section {
          padding: 80px 0;
        }
        .services-page .steps-row {
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .services-page .steps-row::before {
          display: none;
        }
        .services-page .vendor-section {
          padding: 40px 24px;
          border-radius: 20px;
        }
        .services-page .v-left h2 {
          font-size: 30px;
        }
        .services-page .f-row {
          grid-template-columns: 1fr;
          gap: 0;
        }
        .services-page .how-wrap {
          padding: 48px 24px;
          border-radius: 16px;
        }
        .services-page .trust-row {
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .services-page .trust-item {
          padding: 24px 12px;
        }
        .services-page .trust-item .t-num {
          font-size: 28px;
          letter-spacing: -1px;
        }
        .services-page .trust-item .t-lbl {
          font-size: 12px;
          line-height: 1.35;
        }
        .services-page .audience-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .services-page .audience-chips {
          flex-direction: column;
        }
      }
      @media (max-width: 480px) {
        .services-page .hero-stat {
          padding: 14px 6px;
          min-width: 0;
        }
        .services-page .hero-stat-val {
          font-size: 18px;
          letter-spacing: -0.3px;
          white-space: normal;
          word-break: break-word;
        }
        .services-page .hero-stat-lbl {
          font-size: 11px;
        }
        .services-page .trust-row {
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .services-page .trust-item {
          padding: 20px 10px;
        }
        .services-page .trust-item .t-num {
          font-size: 22px;
          letter-spacing: -0.5px;
        }
        .services-page .trust-item .t-num span {
          font-size: 16px;
        }
        .services-page .trust-item .t-lbl {
          font-size: 11px;
        }
        .services-page .hero h1 {
          font-size: 32px;
        }
        .services-page .sec-header h2 {
          font-size: 26px;
        }
        .services-page .sec-header p {
          font-size: 15px;
        }
        .services-page .v-left h2 {
          font-size: 26px;
        }
        .services-page .v-form {
          padding: 24px 20px;
        }
        .services-page .vendor-section {
          padding: 32px 18px;
        }
        .services-page .container {
          padding: 0 16px;
        }
        .services-page .btn-glow,
        .services-page .btn-outline {
          padding: 14px 24px;
          font-size: 14px;
        }
      }
    `}</style>
  );
}
