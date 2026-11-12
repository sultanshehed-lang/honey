import React, { useEffect, useId, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown,
  CircleUserRound, Flower2, Instagram, Leaf, Mail, MapPin, Menu, Minus, Plus,
  Search, ShieldCheck, ShoppingBag, Sparkles, X,
} from 'lucide-react';
import { faqs, origins, processSteps, products, testimonials } from './data.js';

const money = (value) => value === null || value === undefined || value === '' || !Number.isFinite(Number(value))
  ? 'Price on request'
  : 'Rs. ' + Number(value).toLocaleString('en-PK', { maximumFractionDigits: 0 });
const BUSINESS_WHATSAPP_NUMBER = '923429753834';
const whatsappUrl = (message) => {
  return 'https://wa.me/' + BUSINESS_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
};
const readLocal = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};
const BUSINESS_ADDRESS = 'Redawan, Ikram Pur, Biozo Kharki, Katlang, Mardan 23090';
const BUSINESS_PHONE = '03429753834';
const LOCATION = { latitude: 34.4966736, longitude: 72.0109411 };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

function Eyebrow({ children, dark = false }) {
  return <div className={'eyebrow' + (dark ? ' eyebrow-light' : '')}><span className="eyebrow-rule" />{children}</div>;
}

function BrandMark({ light = false }) {
  return (
    <a className={'brand' + (light ? ' brand-light' : '')} href="#top" aria-label="Sultan Shehed, home">
      <span className="brand-emblem" aria-hidden="true"><span>S</span></span>
      <span className="brand-wordmark"><span>SULTAN</span><span>SHEHED</span></span>
    </a>
  );
}

const jarPalettes = {
  sidr: { background: '#d8c39c', edge: '#a5824a', honey: '#9b4f19', honeyLight: '#d88627' },
  acacia: { background: '#ead7ae', edge: '#b89356', honey: '#d5a33d', honeyLight: '#f4d277' },
  wildflower: { background: '#dcd2b2', edge: '#a07842', honey: '#ba6e1e', honeyLight: '#e3a843' },
  mountain: { background: '#d2d8cd', edge: '#84937c', honey: '#b77d2e', honeyLight: '#e2b85c' },
  forest: { background: '#d0c5ae', edge: '#76614a', honey: '#69401f', honeyLight: '#a56b2d' },
  raw: { background: '#e5dbca', edge: '#a99268', honey: '#c58a35', honeyLight: '#e2b553' },
};

function HoneyProductPackshot({ product, compact = false, cover = false, decorative = false, seamless = false }) {
  const palette = jarPalettes[product.id] || jarPalettes.raw;
  const nameLines = product.name === 'Raw Natural Honey' ? ['Raw Natural', 'Honey'] : product.name.split(' ');
  const id = 'jar-' + product.id + '-' + useId().replace(/:/g, '');
  return (
    <svg className={'honey-packshot' + (compact ? ' honey-packshot-compact' : '')} viewBox="0 0 320 380" preserveAspectRatio={cover ? 'xMidYMid slice' : 'xMidYMid meet'} role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : product.name + ' in a Sultan Shehed glass jar'} aria-hidden={decorative ? 'true' : undefined} focusable="false">
      <defs>
        <linearGradient id={id + '-scene'} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f7f2e7" /><stop offset=".52" stopColor={palette.background} /><stop offset="1" stopColor="#b7a17b" /></linearGradient>
        <radialGradient id={id + '-glow'} cx=".5" cy=".35" r=".65"><stop stopColor="#fffdf6" stopOpacity=".82" /><stop offset="1" stopColor="#fffdf6" stopOpacity="0" /></radialGradient>
        <linearGradient id={id + '-honey'} x1="0" y1="0" x2="1" y2=".8"><stop stopColor={palette.honeyLight} /><stop offset=".43" stopColor={palette.honey} /><stop offset="1" stopColor="#71401d" /></linearGradient>
        <linearGradient id={id + '-glass'} x1="0" y1="0" x2="1" y2="0"><stop stopColor="#fff" stopOpacity=".72" /><stop offset=".12" stopColor="#fff" stopOpacity=".18" /><stop offset=".52" stopColor="#fff" stopOpacity=".04" /><stop offset=".9" stopColor="#fff" stopOpacity=".25" /><stop offset="1" stopColor="#fff" stopOpacity=".62" /></linearGradient>
        <linearGradient id={id + '-lid'} x1="0" y1="0" x2="1" y2="0"><stop stopColor="#8f6d35" /><stop offset=".18" stopColor="#f5e4b5" /><stop offset=".48" stopColor="#bd984e" /><stop offset=".77" stopColor="#efdda8" /><stop offset="1" stopColor="#89642d" /></linearGradient>
        <filter id={id + '-shadow'} x="-.4" y="-.3" width="1.8" height="1.8"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      {!seamless && <>
        <rect width="320" height="380" fill={'url(#' + id + '-scene)'} />
        <rect width="320" height="380" fill={'url(#' + id + '-glow)'} />
        <path d="M0 296C68 264 112 285 168 274s101-24 152 2v104H0Z" fill="#fff" opacity=".12" />
        <path d="M18 61h74M228 76h54M28 100h37" stroke="#fff" strokeOpacity=".28" strokeWidth="1" />
      </>}
      <ellipse cx="160" cy="347" rx="97" ry="14" fill="#4c371e" opacity={seamless ? '.42' : '.22'} filter={'url(#' + id + '-shadow)'} />
      <g>
        <path d="M119 107V91q0-11 11-11h60q11 0 11 11v17c0 13 18 21 32 34 12 12 18 27 18 44v112q0 31-31 31H91q-31 0-31-31V185c0-17 6-32 18-44 14-13 41-21 41-34Z" fill="#fff" fillOpacity=".19" stroke="#fff" strokeOpacity=".86" strokeWidth="3" />
        <path d="M67 183c27 10 159 10 186 0v114q0 25-25 25H92q-25 0-25-25Z" fill={'url(#' + id + '-honey)'} />
        <path d="M67 183c27 10 159 10 186 0" fill="none" stroke="#ffefbd" strokeOpacity=".9" strokeWidth="3" />
        <path d="M119 107V91q0-11 11-11h60q11 0 11 11v17c0 13 18 21 32 34 12 12 18 27 18 44v112q0 31-31 31H91q-31 0-31-31V185c0-17 6-32 18-44 14-13 41-21 41-34Z" fill={'url(#' + id + '-glass)'} stroke="#fffdf4" strokeOpacity=".86" strokeWidth="2" />
        <path d="M78 183v118q0 19 12 23M242 183v118q0 19-12 23" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="5" strokeLinecap="round" />
        <path d="M87 153c8-8 17-13 27-17" fill="none" stroke="#fff" strokeOpacity=".68" strokeWidth="4" strokeLinecap="round" />
        <rect x="109" y="52" width="102" height="45" rx="7" fill={'url(#' + id + '-lid)'} stroke="#fff0c9" strokeOpacity=".8" strokeWidth="1.5" />
        <path d="M117 61v26M126 58v31M194 58v31M203 61v26" stroke="#745526" strokeOpacity=".32" strokeWidth="1.4" />
        <path d="M113 92h94M114 100h92" stroke="#f4dfac" strokeOpacity=".65" strokeWidth="2" />
        <rect x="83" y="205" width="154" height="101" rx="4" fill="#f7f1e3" stroke={palette.edge} strokeWidth="1.4" />
        <rect x="83" y="205" width="154" height="6" fill={palette.edge} />
        <text x="160" y="226" textAnchor="middle" fill="#493723" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.6">SULTAN SHEHED</text>
        <path d="M101 234h118" stroke={palette.edge} strokeOpacity=".58" strokeWidth=".8" />
        <text x="160" y="256" textAnchor="middle" fill="#3d2d1c" fontFamily="Georgia,serif" fontSize="14" fontWeight="600">{nameLines[0]}</text>
        {nameLines[1] && <text x="160" y="272" textAnchor="middle" fill="#3d2d1c" fontFamily="Georgia,serif" fontSize="14" fontWeight="600">{nameLines[1]}</text>}
        <text x="160" y="290" textAnchor="middle" fill="#8b7044" fontFamily="Arial,sans-serif" fontSize="6.3" letterSpacing="1.1">PURE HONEY · 250 ML</text>
        <circle cx="160" cy="321" r="14" fill={palette.edge} stroke="#f7e9c3" strokeWidth="2" />
        <text x="160" y="326" textAnchor="middle" fill="#fff7e4" fontFamily="Georgia,serif" fontSize="14">S</text>
      </g>
    </svg>
  );
}

function ProductImage({ product, compact = false, decorative = false }) {
  if (product.photo) {
    return <img className={'product-photograph' + (compact ? ' product-photograph-compact' : '')} src={product.image} alt={decorative ? '' : product.name + ' luxury honey jar and gift packaging'} loading="lazy" decoding="async" />;
  }
  return <HoneyProductPackshot product={product} compact={compact} cover={!compact} decorative={decorative} />;
}

function SectionTitle({ kicker, children, description, light = false }) {
  return (
    <motion.div className={'section-title' + (light ? ' section-title-light' : '')} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.22 }}>
      <Eyebrow dark={light}>{kicker}</Eyebrow>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ProductCard({ product, onOpen, onAdd, onOrder, priceFor, index = 0 }) {
  const [size, setSize] = useState(product.sizes?.[0] || '250ml');
  const [quantity, setQuantity] = useState(1);
  const price = priceFor(product.id, size);
  return (
    <motion.article className="product-card" variants={fadeUp} custom={index} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} transition={{ delay: index * 0.07 }}>
      <button className="product-image-button" onClick={() => onOpen(product)} aria-label={'View ' + product.name + ' details'}>
        <span className="product-image-wrap"><ProductImage product={product} decorative /></span>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-image-arrow"><ArrowUpRight size={19} strokeWidth={1.4} /></span>
      </button>
      <div className="product-copy">
        <div className="product-topline"><span>{product.origin}</span><span>PURE HONEY</span></div>
        <button className="product-name-link" onClick={() => onOpen(product)}><h3>{product.name}</h3><span>{product.subtitle}</span></button>
        <div className="product-buy-row"><label>SIZE<select value={size} onChange={(event) => setSize(event.target.value)} aria-label={'Choose ' + product.name + ' jar size'}>{product.sizes.map((option) => <option value={option} key={option}>{option}</option>)}</select></label><strong>{money(price)}</strong></div>
        <div className="product-card-actions"><QuantityControl value={quantity} compact onChange={setQuantity} /><button className="text-add" onClick={() => onAdd(product, quantity, size)}><span>Add to bag</span><Plus size={16} /></button></div>
        <button className="product-whatsapp whatsapp-glitter" onClick={() => onOrder(product, size, quantity)}><span className="social-wa">w</span> Order on WhatsApp</button>
      </div>
    </motion.article>
  );
}

function PakistanMap({ selected }) {
  const coordinates = selected.coordinates || [LOCATION.latitude, LOCATION.longitude];
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=60.5%2C23.4%2C78.3%2C37.5&layer=mapnik&marker=' + latitude + '%2C' + longitude;
  const fullMapUrl = 'https://www.openstreetmap.org/?mlat=' + latitude + '&mlon=' + longitude + '#map=7/' + latitude + '/' + longitude;
  return (
    <div className="map-canvas">
      <iframe className="pakistan-map-frame" title="Geographic map of Pakistan and its honey-producing regions" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="map-wash" aria-hidden="true" />
      <div className="map-topline"><span><i /> PAKISTAN · ORIGIN MAP</span><a href={fullMapUrl} target="_blank" rel="noreferrer">OPEN MAP <ArrowUpRight size={12} /></a></div>
      <div className="map-focus" aria-live="polite"><span className="map-focus-kicker">REGION IN FOCUS</span><strong>{selected.name}</strong><span className="map-focus-pin"><MapPin size={13} /> SULTAN SHEHED · {selected.shortName || selected.name}</span></div>
      <div className="map-caption"><span className="map-caption-dot" /> SEVEN REGIONS <span>—</span> ONE NATURAL HERITAGE</div>
    </div>
  );
}

function QuantityControl({ value, onChange, compact = false }) {
  return (
    <div className={'quantity-control' + (compact ? ' quantity-compact' : '')} aria-label="Quantity">
      <button aria-label="Decrease quantity" onClick={() => onChange(Math.max(1, value - 1))}><Minus size={14} /></button>
      <span>{value}</span>
      <button aria-label="Increase quantity" onClick={() => onChange(value + 1)}><Plus size={14} /></button>
    </div>
  );
}

function downloadShippingPdf(order) {
  const clean = (value) => String(value ?? 'To be confirmed').normalize('NFKD').replace(/[^\x20-\x7E]/g, '?').replace(/([\\()])/g, '\\$1');
  const commands = [];
  const text = (value, x, y, size = 10, font = 'F1', color = '0.24 0.18 0.11') => commands.push('BT /' + font + ' ' + size + ' Tf ' + color + ' rg 1 0 0 1 ' + x + ' ' + y + ' Tm (' + clean(value) + ') Tj ET');
  const line = (x1, y1, x2, y2, color = '0.78 0.68 0.48', width = 0.7) => commands.push(color + ' RG ' + width + ' w ' + x1 + ' ' + y1 + ' m ' + x2 + ' ' + y2 + ' l S');
  commands.push('0.98 0.97 0.94 rg 0 0 595 842 re f');
  commands.push('0.25 0.19 0.12 rg 32 730 531 80 re f');
  text('SULTAN SHEHED', 51, 773, 20, 'F2', '0.94 0.84 0.63');
  text('PAKISTAN  /  ORDER SHIPPING INFORMATION', 52, 752, 8, 'F1', '0.90 0.85 0.76');
  text('FROM', 48, 699, 8, 'F2', '0.63 0.49 0.25');
  text('Redawan, Ikram Pur, Biozo Kharki, Katlang', 48, 680, 11, 'F2');
  text('Mardan, Pakistan - 23090', 48, 664, 9);
  text('Contact: 03429753834', 48, 648, 9);
  line(48, 630, 547, 630);
  text('TO', 48, 608, 8, 'F2', '0.63 0.49 0.25');
  text(order.name, 48, 588, 12, 'F2');
  text(order.phone, 48, 570, 10);
  const addressLines = [order.address, order.city + ' - ' + order.postalCode];
  let y = 552;
  for (const address of addressLines) {
    const words = clean(address).split(' ');
    let row = '';
    for (const word of words) {
      if ((row + ' ' + word).length > 76) { text(row, 48, y, 9); y -= 14; row = word; }
      else row = row ? row + ' ' + word : word;
    }
    if (row) { text(row, 48, y, 9); y -= 14; }
  }
  line(48, y - 2, 547, y - 2);
  y -= 25;
  text('ORDER INFORMATION', 48, y, 8, 'F2', '0.63 0.49 0.25');
  y -= 21;
  text('Order ID: ' + order.reference, 48, y, 10, 'F2');
  text('Order date: ' + new Date(order.createdAt).toLocaleDateString('en-PK'), 330, y, 9);
  y -= 23;
  text('HONEY TYPE  /  PACKAGE SIZE  /  QUANTITY', 48, y, 7, 'F2', '0.46 0.38 0.27');
  y -= 18;
  for (const item of order.items) {
    text(item.product.name + '  /  ' + item.size + '  /  Qty ' + item.quantity + '  /  ' + money(item.lineTotal), 48, y, 9);
    y -= 16;
  }
  line(48, y - 2, 547, y - 2);
  y -= 23;
  text('Product subtotal: ' + money(order.subtotal), 48, y, 9);
  y -= 16;
  text('Delivery charges: ' + money(order.deliveryCharge), 48, y, 9);
  y -= 18;
  text('Total amount: ' + money(order.total), 48, y, 12, 'F2');
  y -= 19;
  text('Payment method: ' + order.paymentLabel, 48, y, 9);
  line(48, 89, 547, 89);
  text('PRINTABLE SHIPPING INFORMATION - NOT A COURIER-ISSUED WAYBILL', 48, 69, 7, 'F2', '0.47 0.40 0.30');
  text('Courier service and delivery details are confirmed separately.', 48, 53, 8, 'F1', '0.48 0.42 0.34');

  const stream = commands.join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
    '<< /Length ' + new TextEncoder().encode(stream).length + ' >>\nstream\n' + stream + '\nendstream',
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(new TextEncoder().encode(pdf).length);
    pdf += (index + 1) + ' 0 obj\n' + object + '\nendobj\n';
  });
  const xrefOffset = new TextEncoder().encode(pdf).length;
  pdf += 'xref\n0 ' + (objects.length + 1) + '\n0000000000 65535 f \n';
  offsets.slice(1).forEach((offset) => { pdf += String(offset).padStart(10, '0') + ' 00000 n \n'; });
  pdf += 'trailer\n<< /Size ' + (objects.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + xrefOffset + '\n%%EOF';
  const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'sultan-shehed-' + order.reference.toLowerCase() + '-shipping-label.pdf';
  anchor.click();
  URL.revokeObjectURL(url);
}

function NewsletterStillLife() {
  const reduceMotion = useReducedMotion();
  const motionBegin = reduceMotion ? 'indefinite' : '0s';
  const petals = Array.from({ length: 20 }, (_, index) => index * 18);
  const innerPetals = Array.from({ length: 12 }, (_, index) => index * 30);
  const seeds = Array.from({ length: 34 }, (_, index) => {
    const angle = index * 2.399;
    const radius = 6 + ((index * 13) % 28);
    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, size: 1 + (index % 3) * 0.35 };
  });

  return (
    <div className="newsletter-scene newsletter-vector-scene" role="img" aria-label="A golden bee rests on a sunflower beside an animated Sultan Shehed honey jar">
      <div className="newsletter-scene-glow" aria-hidden="true" />
      <svg className="newsletter-still-life" viewBox="0 0 720 560" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="nectar-stage-glow" cx="50%" cy="48%" r="60%"><stop stopColor="#b6873d" stopOpacity=".34" /><stop offset="1" stopColor="#b6873d" stopOpacity="0" /></radialGradient>
          <linearGradient id="sunflower-petal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff0bd" /><stop offset=".38" stopColor="#e5b956" /><stop offset=".78" stopColor="#bf7e2d" /><stop offset="1" stopColor="#755022" /></linearGradient>
          <linearGradient id="sunflower-petal-inner" x1=".2" y1="0" x2=".8" y2="1"><stop stopColor="#ffedac" /><stop offset=".56" stopColor="#e6b852" /><stop offset="1" stopColor="#ac6c27" /></linearGradient>
          <radialGradient id="sunflower-center" cx="35%" cy="28%"><stop stopColor="#ffe9a1" /><stop offset=".4" stopColor="#c88a35" /><stop offset="1" stopColor="#513319" /></radialGradient>
          <linearGradient id="sunflower-stem" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#434d2f" /><stop offset=".45" stopColor="#a5a15b" /><stop offset="1" stopColor="#3b432a" /></linearGradient>
          <linearGradient id="sunflower-leaf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c0b66d" /><stop offset=".45" stopColor="#788149" /><stop offset="1" stopColor="#353d28" /></linearGradient>
          <linearGradient id="bee-fur" x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#ffe7a0" /><stop offset=".3" stopColor="#d99b39" /><stop offset=".7" stopColor="#8d591f" /><stop offset="1" stopColor="#33271e" /></linearGradient>
          <linearGradient id="bee-wing" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff9e4" stopOpacity=".83" /><stop offset="1" stopColor="#b8c5b2" stopOpacity=".14" /></linearGradient>
          <linearGradient id="jar-honey-gradient" x1="0" y1="0" x2=".9" y2="1"><stop stopColor="#ffe17d" /><stop offset=".35" stopColor="#d89428" /><stop offset=".75" stopColor="#985019" /><stop offset="1" stopColor="#4b2b17" /></linearGradient>
          <linearGradient id="jar-glass-gradient" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#fff2cf" stopOpacity=".2" /><stop offset=".14" stopColor="#fff6dc" stopOpacity=".71" /><stop offset=".32" stopColor="#fff" stopOpacity=".08" /><stop offset=".72" stopColor="#fff" stopOpacity=".1" /><stop offset=".9" stopColor="#fff0ca" stopOpacity=".48" /><stop offset="1" stopColor="#fff" stopOpacity=".17" /></linearGradient>
          <linearGradient id="jar-gold-gradient" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#77552c" /><stop offset=".19" stopColor="#f0d599" /><stop offset=".48" stopColor="#ae8541" /><stop offset=".78" stopColor="#f2dca8" /><stop offset="1" stopColor="#72522c" /></linearGradient>
          <linearGradient id="jar-label-gradient" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#58442c" /><stop offset="1" stopColor="#302319" /></linearGradient>
          <filter id="nectar-soft-shadow" x="-.4" y="-.4" width="1.8" height="1.9"><feGaussianBlur stdDeviation="11" /></filter>
          <clipPath id="sunflower-seed-clip"><circle cx="0" cy="0" r="37" /></clipPath>
          <clipPath id="nectar-jar-clip"><path d="M453 204h139v43h11c17 19 27 44 27 71v148q0 24-25 24H440q-25 0-25-24V318c0-27 10-52 27-71h11Z" /></clipPath>
        </defs>
        <rect width="720" height="560" fill="url(#nectar-stage-glow)" />
        <ellipse cx="365" cy="493" rx="241" ry="25" fill="#080604" opacity=".5" filter="url(#nectar-soft-shadow)" />
        <ellipse cx="365" cy="491" rx="214" ry="11" fill="#d2a75d" opacity=".2" />
        <g transform="rotate(0 253 480)">
          <animateTransform attributeName="transform" type="rotate" values="-.7 253 480;1 253 480;-.7 253 480" dur="6.2s" repeatCount="indefinite" begin={motionBegin} />
          <path d="M249 289c-9 75 21 116-1 197-8 32-5 57 2 76 13-25 19-53 14-79-12-75 18-126 4-200" fill="none" stroke="url(#sunflower-stem)" strokeWidth="12" strokeLinecap="round" />
          <path d="M259 397c-43-45-78-40-100-29 15 38 46 59 101 48" fill="url(#sunflower-leaf)" stroke="#c7b876" strokeOpacity=".48" strokeWidth="1.5" />
          <path d="M259 411c-30-26-58-35-86-40m85 43c38-59 72-65 99-58-8 38-38 66-96 75" fill="none" stroke="#e9d998" strokeOpacity=".53" strokeWidth="2" />
          <path d="M260 464c-30-22-52-23-68-17 9 26 29 38 69 28" fill="url(#sunflower-leaf)" stroke="#d1c17a" strokeOpacity=".38" strokeWidth="1.4" />
          <g transform="translate(253 283) rotate(-7)">
            {petals.map((angle, index) => <path key={'sunflower-petal-' + index} d="M0 7C-20-11-27-42-18-72c6-19 21-25 31-9 17 27 14 61-5 88Z" transform={'rotate(' + angle + ')'} fill="url(#sunflower-petal)" stroke="#ffe9aa" strokeOpacity=".34" strokeWidth="1.2" />)}
            {innerPetals.map((angle, index) => <path key={'sunflower-inner-' + index} d="M0 5C-15-9-19-29-13-48c4-13 15-17 23-7 12 18 10 42-3 59Z" transform={'rotate(' + (angle + 8) + ')'} fill="url(#sunflower-petal-inner)" stroke="#fff0bb" strokeOpacity=".3" strokeWidth="1" />)}
            <circle r="41" fill="url(#sunflower-center)" stroke="#f5d27d" strokeWidth="2" />
            <circle r="34" fill="none" stroke="#ffe6a0" strokeOpacity=".4" strokeWidth="1" />
            <g clipPath="url(#sunflower-seed-clip)">{seeds.map((seed, index) => <ellipse key={'sunflower-seed-' + index} cx={seed.x} cy={seed.y} rx={seed.size} ry={seed.size * 1.45} transform={'rotate(' + (index * 19) + ' ' + seed.x + ' ' + seed.y + ')'} fill={index % 2 ? '#513319' : '#f5d88d'} opacity={index % 2 ? '.75' : '.82'} />)}</g>
          </g>
          <g transform="translate(304 203) rotate(18)">
            <g transform="scale(1 1)">
              <animateTransform attributeName="transform" type="scale" values="1 .62;1 1;1 .62" dur=".18s" repeatCount="indefinite" begin={motionBegin} />
              <path d="M-8-12C-37-45-31-72-14-73 3-72 12-43 4-17Z" fill="url(#bee-wing)" stroke="#fff4dc" strokeOpacity=".85" strokeWidth="1.5" />
              <path d="M3-14C8-47 30-62 42-52 54-40 32-16 12-7Z" fill="url(#bee-wing)" stroke="#fff4dc" strokeOpacity=".72" strokeWidth="1.3" />
              <path d="M-17-21C-19-44-14-59-4-67M11-18C20-34 31-43 41-46" fill="none" stroke="#fff" strokeOpacity=".62" strokeWidth="1" />
            </g>
            <g transform="translate(0 0)">
              <animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="2.3s" repeatCount="indefinite" begin={motionBegin} />
              <path d="M-21-16C-9-27 15-25 29-15c16 12 16 29 1 39-15 10-38 7-51-4-12-10-12-25 0-36Z" fill="url(#bee-fur)" stroke="#f7dda0" strokeWidth="1.6" />
              <path d="M-3-24 4 22M12-24 18 19" stroke="#38291e" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="-13" cy="-17" rx="14" ry="5" fill="#fff4d0" opacity=".26" transform="rotate(-17 -13 -17)" />
              <circle cx="-24" cy="-2" r="12" fill="#403126" stroke="#d6a14a" strokeWidth="2" />
              <circle cx="-28" cy="-4" r="2.2" fill="#fff0c3" />
              <path d="M-30-12q-11-12-14-9M-21-14q-3-13 3-16M-4 9q-3 13-13 17m27-17q4 11 14 12M-4 11 2 20M11 10 18 18" fill="none" stroke="#e8c77a" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </g>
        <g transform="translate(0 0)">
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 -2;0 0" dur="4.4s" repeatCount="indefinite" begin={motionBegin} />
          <ellipse cx="521" cy="490" rx="112" ry="12" fill="#070504" opacity=".5" filter="url(#nectar-soft-shadow)" />
          <g transform="translate(0 0)">
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="4.4s" repeatCount="indefinite" begin={motionBegin} />
            <path d="M460 168h122q10 0 10 10v33q0 10-10 10H460q-10 0-10-10v-33q0-10 10-10Z" fill="url(#jar-gold-gradient)" stroke="#f2dda9" strokeWidth="1.5" />
            <ellipse cx="521" cy="170" rx="61" ry="10" fill="#d8ba78" stroke="#f5e1af" strokeWidth="1.5" />
            <path d="M462 177v27m11-29v32m12-34v36m12-36v36m12-36v36m12-36v36m12-36v36m12-35v35m12-33v31" stroke="#70532d" strokeOpacity=".43" strokeWidth="1.5" />
          </g>
          <path d="M453 204h139v43h11c17 19 27 44 27 71v148q0 24-25 24H440q-25 0-25-24V318c0-27 10-52 27-71h11Z" fill="#fff2cf" fillOpacity=".1" stroke="#fff1d2" strokeOpacity=".9" strokeWidth="3" />
          <g clipPath="url(#nectar-jar-clip)">
            <path d="M407 323c48-15 150-10 235 0v178H407Z" fill="url(#jar-honey-gradient)" transform="translate(0 0)">
              <animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="4.4s" repeatCount="indefinite" begin={motionBegin} />
            </path>
            <path d="M415 324c25-8 47-7 70 0s47 8 70 0 48-7 76 0" fill="none" stroke="#ffe08a" strokeWidth="4" strokeOpacity=".88" transform="translate(0 0)">
              <animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="3.2s" repeatCount="indefinite" begin={motionBegin} />
            </path>
            <path d="M430 357c37 7 59 6 92-1m16 2c28 3 45 2 70-2M430 387c26 4 44 4 61 1" fill="none" stroke="#ffdc80" strokeOpacity=".24" strokeWidth="2" />
            <circle cx="579" cy="422" r="5" fill="#ffdc80" opacity=".5" />
            <circle cx="450" cy="448" r="3" fill="#fff0ac" opacity=".4" />
          </g>
          <path d="M453 204h139v43h11c17 19 27 44 27 71v148q0 24-25 24H440q-25 0-25-24V318c0-27 10-52 27-71h11Z" fill="url(#jar-glass-gradient)" stroke="#fff4dc" strokeOpacity=".76" strokeWidth="1.2" />
          <path d="M437 293v164q0 19 17 21m149-185v162q0 20-18 22M448 276q13-21 29-27m93 2q22 13 33 35" fill="none" stroke="#fff6df" strokeOpacity=".69" strokeWidth="4" strokeLinecap="round" />
          <g className="newsletter-jar-label">
            <rect x="438" y="341" width="167" height="113" rx="3" fill="url(#jar-label-gradient)" stroke="#dfc17b" strokeWidth="2" />
            <rect x="445" y="348" width="153" height="99" fill="none" stroke="#d6b977" strokeOpacity=".6" />
            <path d="M460 363h123" stroke="#cba85f" strokeWidth="1" />
            <text x="521" y="360" textAnchor="middle" fill="#f5e7c6" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="700" letterSpacing="2">SULTAN SHEHED</text>
            <text x="521" y="392" textAnchor="middle" fill="#f5e3bd" fontFamily="Georgia,serif" fontSize="17" letterSpacing="1">PULOSAH</text>
            <text x="521" y="415" textAnchor="middle" fill="#d8bb7c" fontFamily="Georgia,serif" fontSize="15" letterSpacing="3">HONEY</text>
            <path d="M474 425h94" stroke="#c7a55e" strokeWidth=".8" />
            <text x="521" y="440" textAnchor="middle" fill="#d9c7a1" fontFamily="Arial,sans-serif" fontSize="6.5" letterSpacing="1.3">RAW · SMALL BATCH · 500 G</text>
            <path d="M452 349h40v98h-40z" fill="url(#jar-glass-gradient)" opacity=".3" transform="translate(-15 0)">
              <animateTransform attributeName="transform" type="translate" values="-15 0;99 0;99 0;-15 0" dur="4.2s" repeatCount="indefinite" begin={motionBegin} />
            </path>
          </g>
          <path d="M589 270c11 25 13 48 13 73" fill="none" stroke="#fff8dd" strokeWidth="7" strokeLinecap="round" />
          <path d="M596 325c-1 13 4 19 3 30-1 7-6 10-8 4-3-9 4-17 1-29Z" fill="#e8ad42" stroke="#ffe6a0" strokeWidth="1" transform="translate(0 0)">
            <animateTransform attributeName="transform" type="translate" values="0 -2;0 5;0 14;0 -2" dur="3.8s" repeatCount="indefinite" begin={motionBegin} />
            <animate attributeName="opacity" values=".2;1;.35;.2" dur="3.8s" repeatCount="indefinite" begin={motionBegin} />
          </path>
          <circle cx="521" cy="476" r="9" fill="#997744" stroke="#e4ce9d" strokeWidth="1.4" />
          <text x="521" y="480" textAnchor="middle" fill="#fbf1d6" fontFamily="Georgia,serif" fontSize="9">S</text>
        </g>
        <g className="newsletter-pollen" fill="#f1d48e">
          <circle cx="163" cy="214" r="2.2" /><circle cx="201" cy="149" r="1.6" /><circle cx="365" cy="270" r="2.1" /><circle cx="384" cy="185" r="1.4" /><circle cx="375" cy="363" r="1.8" /><circle cx="633" cy="254" r="1.7" /><circle cx="654" cy="347" r="2.1" /><circle cx="372" cy="423" r="1.2" />
        </g>
        <text x="64" y="520" fill="#c4aa79" fontFamily="Arial,sans-serif" fontSize="8" letterSpacing="2.2">GATHERED IN BLOOM · BOTTLED WITH CARE</text>
        <path d="M64 531h154" stroke="#b39053" strokeOpacity=".65" strokeWidth="1" />
      </svg>
      <div className="newsletter-scene-caption"><span>FROM BLOSSOM TO BOTTLE</span><i /> <span>PULOSAH · 01 / 02</span></div>
    </div>
  );
}
function App() {
  const [cart, setCart] = useState(() => {
    const saved = readLocal('golden-nectar-cart', []);
    return Array.isArray(saved) ? saved.filter((item) => products.some((product) => product.id === item.productId)).map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return { ...item, size: product.sizes.includes(item.size) ? item.size : product.sizes[0] };
    }) : [];
  });
  const [panel, setPanel] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedOrigin, setSelectedOrigin] = useState(origins[0]);
  const [originFilter, setOriginFilter] = useState('All honey');
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [account, setAccount] = useState(() => readLocal('golden-nectar-account', null));
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const [orderChannel, setOrderChannel] = useState('checkout');
  const [storeSettings, setStoreSettings] = useState(() => ({ prices: {}, deliveryCharge: null, deliveryEstimate: '', ...readLocal('golden-nectar-store-settings', {}) }));

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const priceFor = (productId, size) => {
    const value = storeSettings.prices?.[productId]?.[size];
    return value === '' || value === undefined || value === null || !Number.isFinite(Number(value)) ? null : Number(value);
  };
  const cartLines = cart.map((item, index) => {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) return null;
    const size = item.size || product.sizes?.[0] || '250ml';
    const unitPrice = priceFor(product.id, size);
    return { ...item, lineId: product.id + '-' + size + '-' + index, size, product, unitPrice, lineTotal: unitPrice === null ? null : unitPrice * item.quantity };
  }).filter(Boolean);
  const allPricesConfigured = cartLines.length > 0 && cartLines.every((item) => item.unitPrice !== null);
  const subtotal = cartLines.reduce((sum, item) => sum + (item.lineTotal || 0), 0);
  const visibleProducts = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    return products.filter((product) => {
      const matchesType = originFilter === 'All honey' || product.category === originFilter;
      const matchesSearch = !normalized || [product.name, product.subtitle, product.origin, product.description, product.category].join(' ').toLowerCase().includes(normalized);
      return matchesType && matchesSearch;
    });
  }, [searchTerm, originFilter]);

  useEffect(() => { localStorage.setItem('golden-nectar-cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { if (account) localStorage.setItem('golden-nectar-account', JSON.stringify(account)); else localStorage.removeItem('golden-nectar-account'); }, [account]);
  useEffect(() => { localStorage.setItem('golden-nectar-store-settings', JSON.stringify(storeSettings)); }, [storeSettings]);
  useEffect(() => {
    const syncProduct = () => {
      const match = window.location.hash.match(/^#product\/(.+)$/);
      if (match) {
        const product = products.find((entry) => entry.id === match[1]);
        if (product) { setActiveProduct(product); setPanel('product'); }
      } else setPanel((current) => current === 'product' ? null : current);
    };
    syncProduct();
    window.addEventListener('hashchange', syncProduct);
    window.addEventListener('popstate', syncProduct);
    return () => { window.removeEventListener('hashchange', syncProduct); window.removeEventListener('popstate', syncProduct); };
  }, []);
  useEffect(() => {
    if (!panel) return undefined;
    const onKeyDown = (event) => { if (event.key === 'Escape') closePanel(); };
    document.body.classList.add('panel-open');
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.classList.remove('panel-open'); window.removeEventListener('keydown', onKeyDown); };
  }, [panel]);

  function openProduct(product) {
    setActiveProduct(product);
    setPanel('product');
    window.history.pushState(null, '', window.location.pathname + window.location.search + '#product/' + product.id);
  }

  function closePanel() {
    setPanel(null);
    if (window.location.hash.startsWith('#product/')) window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  function addToCart(product, quantity = 1, size = product.sizes?.[0] || '250ml') {
    setCart((current) => {
      const exists = current.find((item) => item.productId === product.id && (item.size || product.sizes?.[0] || '250ml') === size);
      return exists
        ? current.map((item) => item.productId === product.id && (item.size || product.sizes?.[0] || '250ml') === size ? { ...item, quantity: item.quantity + quantity } : item)
        : [...current, { productId: product.id, size, quantity }];
    });
    setPanel('cart');
  }

  function setItemQuantity(productId, size, quantity) {
    setCart((current) => current.map((item) => item.productId === productId && (item.size || '500ml') === size ? { ...item, quantity } : item));
  }

  function removeFromCart(productId, size) {
    setCart((current) => current.filter((item) => !(item.productId === productId && (item.size || '500ml') === size)));
  }

  function prepareWhatsAppOrder(product, size, quantity) {
    if (product) addToCart(product, quantity, size);
    setOrderChannel('whatsapp');
    setPanel('checkout');
  }

  function orderWhatsAppLink(order) {
    const lines = order.items.map((item) => [
      item.product.name + ' · ' + item.size,
      'Quantity: ' + item.quantity,
      'Unit price: ' + money(item.unitPrice),
      'Product total: ' + money(item.lineTotal),
    ].join('\n')).join('\n\n');
    const delivery = order.deliveryCharge === null ? 'To be confirmed' : money(order.deliveryCharge);
    const total = order.total === null ? 'To be confirmed after price and delivery review' : money(order.total);
    const date = new Date(order.createdAt).toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' });
    const message = [
      'NEW SULTAN SHEHED ORDER', '',
      'Customer: ' + order.name,
      'Order reference: ' + order.reference, '',
      lines, '',
      'Product subtotal: ' + money(order.subtotal),
      'Delivery charges: ' + delivery,
      'Order total: ' + total, '',
      'Delivery address:', order.address,
      'City: ' + order.city,
      'Postal code: ' + order.postalCode,
      'Phone: ' + order.phone, '',
      'Payment method: ' + order.paymentLabel,
      'Order date: ' + date, '',
      'Business: Sultan Shehed',
      'Please confirm this order and the delivery details.',
    ].join('\n');
    return whatsappUrl(message);
  }

  function submitCheckout(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const order = {
      reference: 'SS-' + Date.now().toString().slice(-7),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      city: formData.get('city'),
      postalCode: formData.get('postalCode'),
      payment: formData.get('payment'),
      paymentLabel: formData.get('payment') === 'cod' ? 'Cash on delivery' : 'Confirm by WhatsApp',
      items: cartLines,
      subtotal: allPricesConfigured ? subtotal : null,
      deliveryCharge: storeSettings.deliveryCharge,
      total: allPricesConfigured && storeSettings.deliveryCharge !== null ? subtotal + Number(storeSettings.deliveryCharge) : null,
      createdAt: new Date().toISOString(),
    };
    const orders = readLocal('golden-nectar-orders', []);
    localStorage.setItem('golden-nectar-orders', JSON.stringify([...orders, order]));
    window.open(orderWhatsAppLink(order), '_blank', 'noopener,noreferrer');
    setOrderConfirmation(order);
    setCart([]);
    setAccount({ name: order.name, email: order.email });
    setPanel('success');
  }

  function submitNewsletter(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const address = String(formData.get('newsletter-email') || '').trim();
    const subscribers = readLocal('golden-nectar-newsletter', []);
    if (address && !subscribers.includes(address)) localStorage.setItem('golden-nectar-newsletter', JSON.stringify([...subscribers, address]));
    setNewsletterDone(true);
    event.currentTarget.reset();
  }

  function submitAccount(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setAccount({ name: String(formData.get('account-name') || '').trim(), email: String(formData.get('account-email') || '').trim() });
  }

  function scrollTo(id) {
    setMobileMenu(false);
    closePanel();
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  const whatsappLink = whatsappUrl('Hello Sultan Shehed, I would love to know more about your honey collection.');

  return (
    <div id="top" className="site-shell">
      <div className="announcement"><span>DELIVERY ACROSS PAKISTAN · CHARGES CONFIRMED ON WHATSAPP</span><span className="announcement-divider">✳</span><span>GATHERED WITH CARE. SENT WITH LOVE.</span></div>
      <header className="site-header">
        <div className="header-inner">
          <button className="mobile-menu-toggle icon-button" aria-label={mobileMenu ? 'Close menu' : 'Open menu'} onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X size={22} /> : <Menu size={22} />}</button>
          <BrandMark />
          <nav className={'main-nav' + (mobileMenu ? ' main-nav-open' : '')} aria-label="Main navigation">
            <a href="#collection" onClick={() => setMobileMenu(false)}>The collection</a>
            <a href="#story" onClick={() => setMobileMenu(false)}>Our story</a>
            <a href="#origins" onClick={() => setMobileMenu(false)}>Origins</a>
            <a href="#delivery" onClick={() => setMobileMenu(false)}>Delivery</a>
            <a href="#experience" onClick={() => setMobileMenu(false)}>The experience</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button header-search" aria-label="Search the collection" onClick={() => { setPanel('search'); setSearchTerm(''); }}><Search size={19} strokeWidth={1.6} /></button>
            <button className="icon-button header-account" aria-label="Your account" onClick={() => setPanel('account')}><CircleUserRound size={20} strokeWidth={1.5} /></button>
            <button className="bag-button" aria-label={'Shopping bag, ' + cartCount + ' items'} onClick={() => setPanel('cart')}><span className="bag-label">Bag</span><span className="bag-icon"><ShoppingBag size={19} strokeWidth={1.5} /><span className="bag-count">{cartCount}</span></span></button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <img className="hero-image" src={import.meta.env.BASE_URL + 'images/photo-1558642452-9d2a7deb7f62.webp'} alt="Golden honey and honeycomb, lit like late summer" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-grain" />
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}><Eyebrow dark>AN EXTRAORDINARY GIFT OF NATURE</Eyebrow></motion.div>
            <motion.h1 id="hero-heading" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>NATURE'S GOLD.<br /><em>PURE PERFECTION.</em></motion.h1>
            <motion.p className="hero-subheading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.45 }}>Discover the authentic taste of nature.</motion.p>
            <motion.div className="hero-cta-row" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.58 }}>
              <button className="button button-gold" onClick={() => scrollTo('collection')}>Explore the collection <ArrowRight size={16} /></button>
              <button className="hero-play-link" onClick={() => scrollTo('story')}><span className="play-line" /> A story in every drop</button>
            </motion.div>
          </div>
          <div className="hero-side-note"><span>01</span><span className="hero-note-line" /><span>THE ART OF HONEY</span></div>
          <button className="hero-scroll" onClick={() => scrollTo('story')} aria-label="Scroll to our story"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></button>
          <div className="honey-drips" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-edition"><span>S</span><span>EST. IN NATURE<br />CRAFTED WITH CARE</span></div>
        </section>

        <div className="marquee" aria-label="Pure by nature, precious by origin"><div className="marquee-track">{Array.from({ length: 4 }, (_, index) => <span key={index}>PURE BY NATURE <i>✳</i> PRECIOUS BY ORIGIN <i>✳</i> GOLDEN BY DESIGN <i>✳</i></span>)}</div></div>

        <section id="story" className="story-section section-pad">
          <div className="story-topline"><span>FROM BLOSSOM TO BOTTLE</span><span>01 — OUR STORY</span></div>
          <div className="story-grid">
            <motion.div className="story-copy" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <Eyebrow>ROOTED IN THE NATURAL WORLD</Eyebrow>
              <h2>Made slowly.<br /><em>Just as nature intended.</em></h2>
              <p>We follow the bloom, the bees and the quiet rhythm of the seasons. In wild meadows and remote mountain valleys, our keepers tend the hives with care — and gather only what nature is ready to give.</p>
              <p>Every small batch holds a place, a season and the work of thousands of bees. Nothing more is needed.</p>
              <button className="link-button" onClick={() => scrollTo('harvest')}>Discover our way <span><ArrowUpRight size={17} /></span></button>
            </motion.div>
            <div className="story-visuals">
              <motion.figure className="story-main-image" initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 1 }}>
                <img src={import.meta.env.BASE_URL + 'images/photo-1597954217997-ad476ec0d2c0.webp'} alt="A honeybee drinking nectar from a bright flower" loading="lazy" />
                <figcaption><span>THE FIRST GATHERING</span><span>01 / 04</span></figcaption>
              </motion.figure>
              <motion.figure className="story-inset-image" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                <img src={import.meta.env.BASE_URL + 'images/photo-1647427060148-ea2b8f7c6bb3.webp'} alt="A beekeeper inspecting a frame of honeycomb" loading="lazy" />
                <figcaption>CARE, AT EVERY STAGE</figcaption>
              </motion.figure>
              <span className="story-visual-index">Nº 01</span>
              <span className="story-visual-rule" />
            </div>
          </div>
          <div className="story-values">
            <div><span className="value-icon"><Leaf size={18} strokeWidth={1.4} /></span><span><strong>100% pure</strong><small>Nothing added. Ever.</small></span></div>
            <div><span className="value-icon"><Flower2 size={18} strokeWidth={1.4} /></span><span><strong>Single origin</strong><small>True to its place.</small></span></div>
            <div><span className="value-icon"><ShieldCheck size={18} strokeWidth={1.4} /></span><span><strong>Thoughtfully made</strong><small>Kind to the hive.</small></span></div>
          </div>
        </section>

        <section id="collection" className="collection-section section-pad">
          <div className="collection-header">
            <SectionTitle kicker="A COLLECTION OF PLACES" description="Rare honeys, each with its own character. Gathered in small batches, and best enjoyed slowly.">The purest expression<br /><em>of a place.</em></SectionTitle>
            <div className="collection-controls"><span>02 PAKISTANI HONEYS</span><button className="filter-select" onClick={() => setPanel('search')}>Explore all honey <ArrowUpRight size={15} /></button></div>
          </div>
          <div className="collection-grid">
            {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} onOpen={openProduct} onAdd={addToCart} onOrder={prepareWhatsAppOrder} priceFor={priceFor} />)}
          </div>
          <div className="collection-foot"><span>250 ml, 500 ml and 1 L glass jars. Prices set by Sultan Shehed.</span><span>Harvested with care <i>✳</i> Bottled by hand <i>✳</i> Always pure</span></div>
        </section>

        <section id="origins" className="origin-section">
          <div className="origin-heading">
            <SectionTitle kicker="PAKISTAN, IN EVERY BLOOM" description="Explore Pakistan’s varied landscapes and the honey traditions they hold. Khyber Pakhtunkhwa is our home and the heart of our story." light>Good honey<br /><em>knows where it comes from.</em></SectionTitle>
            <span className="origin-index">02 / OUR ORIGINS</span>
          </div>
          <div className="origin-experience">
            <div className="origin-selector" role="tablist" aria-label="Select a honey origin">
              <span className="origin-selector-label">EXPLORE PAKISTAN</span>
              {origins.map((origin, index) => <button key={origin.id} className={'origin-tab' + (selectedOrigin.id === origin.id ? ' origin-tab-active' : '')} role="tab" aria-label={'Show ' + origin.name} aria-selected={selectedOrigin.id === origin.id} onClick={() => setSelectedOrigin(origin)}><span className="origin-tab-number">0{index + 1}</span><span className="origin-tab-name">{origin.name}</span><span className="origin-tab-short">{origin.shortName || origin.name}</span><ArrowUpRight className="origin-tab-arrow" size={16} /></button>)}
              <span className="origin-selector-footer"><span className="origin-selector-dot" /> KPK · OUR HOME REGION</span>
            </div>
            <div className="origin-map-column"><PakistanMap selected={selectedOrigin} /></div>
            <AnimatePresence mode="wait">
              <motion.article className="origin-card" key={selectedOrigin.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.3 }}>
                <div className="origin-photo"><img src={selectedOrigin.image} alt={selectedOrigin.imageAlt || 'Landscape of ' + selectedOrigin.region} loading="lazy" decoding="async" onError={(event) => { const photo = event.currentTarget; if (photo.dataset.fallbackApplied || !selectedOrigin.imageFallback) return; photo.dataset.fallbackApplied = 'true'; photo.src = selectedOrigin.imageFallback; }} /><div className="origin-photo-tint" /><span className="origin-photo-label">{selectedOrigin.region}</span><a className="origin-photo-credit" href={selectedOrigin.imageSource} target="_blank" rel="noreferrer" aria-label={'Photo credit: ' + selectedOrigin.imageCredit + '. View source and license'} title={'Source and license: ' + selectedOrigin.imageCredit}><span>{selectedOrigin.imageCredit}</span><ArrowUpRight size={9} /></a></div>
                <div className="origin-card-copy"><Eyebrow dark>FROM THE {selectedOrigin.name.toUpperCase()}</Eyebrow><h3>{selectedOrigin.headline}</h3><p>{selectedOrigin.story}</p><div className="origin-varieties"><span>{selectedOrigin.productIds.length ? 'FROM THIS REGION' : 'SULTAN SHEHED COLLECTION'}</span><div>{(selectedOrigin.productIds.length ? products.filter((product) => selectedOrigin.productIds.includes(product.id)) : products).map((product) => <button key={product.id} onClick={() => openProduct(product)}>{product.name}<ArrowUpRight size={13} /></button>)}</div></div></div>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>

        <section id="harvest" className="harvest-section section-pad">
          <div className="harvest-heading-row"><SectionTitle kicker="FROM THE HIVE, WITH CARE" description="We never hurry a harvest. Each step is guided by the bees and the landscape that sustains them.">A gentler way<br /><em>to gather gold.</em></SectionTitle><p className="harvest-side-note">A considered process, from the first flower to your table. Nothing rushed. Nothing unnecessary.</p></div>
          <div className="process-grid">{processSteps.map((step, index) => <motion.article className="process-card" key={step.number} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08 }}><div className="process-image"><img src={step.image} alt={step.alt} loading="lazy" /><span className="process-number">{step.number}</span><span className="process-image-glint" /></div><span className="process-step-label">THE HARVEST — {step.number}</span><h3>{step.title}</h3><p>{step.text}</p></motion.article>)}</div>
          <div className="harvest-quote"><span className="quote-mark">“</span><p>We take from the hive only when there is enough<br className="desktop-only" /> to share. That is how it should be.</p><span className="quote-byline">A PROMISE TO THE BEES</span></div>
        </section>

        <section className="storefront-section">
          <div className="storefront-bg" />
          <motion.div className="storefront-copy" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <Eyebrow dark>MADE TO BE GIVEN</Eyebrow>
            <h2>A little golden<br /><em>something.</em></h2>
            <p>A thoughtful gift for the person who has everything — except this.</p>
            <button className="button button-outline-light" onClick={() => { setSearchTerm(''); setOriginFilter('All honey'); scrollTo('collection'); }}>Find a beautiful gift <ArrowRight size={16} /></button>
            <span className="storefront-edition">THE SULTAN SHEHED GIFT EDITION <i>✳</i> A MOMENT OF NATURAL LUXURY</span>
          </motion.div>
          <div className="storefront-product" role="img" aria-label="Sultan Shehed single-origin honey in a glass jar with a premium gift box">
            <div className="gift-shadow" aria-hidden="true" />
            <div className="gift-box-back" aria-hidden="true" />
            <div className="gift-box" aria-hidden="true"><span>SULTAN<br />SHEHED</span><i>RAW · PURE · SINGLE ORIGIN</i><span className="gift-seal">S</span></div>
            <div className="gift-jar gift-jar-one" aria-hidden="true"><div className="jar-lid" /><div className="jar-glass"><div className="jar-level" /><div className="jar-label"><b>SULTAN<br />SHEHED</b><i>PULOSAH HONEY · 250 ML</i></div></div></div>
          </div>
          <span className="storefront-number">04 / THE GIFT EDITION</span>
        </section>

        <section id="delivery" className="delivery-section section-pad">
          <div className="delivery-copy"><Eyebrow>FROM OUR HOME TO YOURS</Eyebrow><h2>Thoughtfully sent.<br /><em>Across Pakistan.</em></h2><p>We deliver throughout Pakistan. Add your address at checkout and we’ll confirm the available service, delivery fee and estimated arrival with you on WhatsApp before dispatch.</p>{storeSettings.deliveryEstimate && <p className="delivery-estimate">Current estimate: {storeSettings.deliveryEstimate}. We confirm the route with you before dispatch.</p>}<div className="delivery-points"><span><Check size={15} /> Carefully packed at origin</span><span><Check size={15} /> Local delivery arranged personally</span><span><Check size={15} /> No unverified delivery promises</span></div><button className="button button-dark" onClick={() => { setOrderChannel('checkout'); setPanel('cart'); }}>Review your bag <ArrowRight size={16} /></button></div>
          <div className="location-card"><div className="location-card-heading"><span className="location-pin"><MapPin size={17} /></span><span><strong>Sultan Shehed · Pakistan</strong><small>Redawan, Ikram Pur, Biozo Kharki, Katlang, Mardan 23090</small></span><span className="location-live"><i /> OUR HOME</span></div><div className="location-card-bottom"><span><strong>Rooted in Khyber Pakhtunkhwa</strong><small>Delivery and pickup details are confirmed directly.</small></span><a className="directions-link" href={'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(BUSINESS_ADDRESS + ', Pakistan')} target="_blank" rel="noreferrer"><MapPin size={15} /> Get directions</a></div></div>
        </section>

        <section id="experience" className="experience-section section-pad">
          <div className="experience-intro"><SectionTitle kicker="A NOTE FROM OUR TABLE" description="The best things are meant to be shared. Here are a few kind words from people who have tasted the difference.">A little love<br /><em>from our table.</em></SectionTitle><button className="link-button experience-link" onClick={() => scrollTo('collection')}>Find your favourite <span><ArrowUpRight size={16} /></span></button></div>
          <div className="testimonial-layout">
            <div className="testimonial-symbol" aria-hidden="true">“</div>
            <AnimatePresence mode="wait"><motion.div className="testimonial-card" key={testimonialIndex} initial={{ opacity: 0, y: 13 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><div className="stars" aria-label="Five stars">★★★★★</div><blockquote>{testimonials[testimonialIndex].quote}</blockquote><div className="testimonial-author"><span className="testimonial-avatar">{testimonials[testimonialIndex].name.charAt(0)}</span><span><strong>{testimonials[testimonialIndex].name}</strong><small>{testimonials[testimonialIndex].detail}</small></span></div></motion.div></AnimatePresence>
            <div className="testimonial-controls"><span>0{testimonialIndex + 1}<i> / </i>0{testimonials.length}</span><button aria-label="Previous review" onClick={() => setTestimonialIndex((testimonialIndex + testimonials.length - 1) % testimonials.length)}><ArrowLeft size={17} /></button><button aria-label="Next review" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}><ArrowRight size={17} /></button></div>
          </div>
          <div className="experience-trust"><div><span className="trust-icon"><Sparkles size={18} /></span><strong>Nothing added.</strong><span>No syrups, no shortcuts.</span></div><div><span className="trust-icon"><Flower2 size={18} /></span><strong>Always single origin.</strong><span>A distinct sense of place.</span></div><div><span className="trust-icon"><ShieldCheck size={18} /></span><strong>Carefully considered.</strong><span>Kind to the colony, always.</span></div></div>
        </section>

        <section id="questions" className="faq-section section-pad">
          <div className="faq-intro"><Eyebrow>A FEW THINGS WORTH KNOWING</Eyebrow><h2>Good to<br /><em>know.</em></h2><p>Curious about your honey? Here are a few answers.</p><a className="faq-contact" href={whatsappLink} target="_blank" rel="noreferrer">Ask us anything <ArrowUpRight size={15} /></a></div>
          <div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} className="faq-item" open={index === 0}><summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><ChevronDown size={18} /></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="newsletter-section" aria-labelledby="newsletter-heading">
          <div className="newsletter-content">
            <div className="newsletter-mark" aria-hidden="true"><span className="newsletter-mark-inner">S</span></div>
            <div className="newsletter-copy"><Eyebrow dark>A LETTER FROM THE HIVE</Eyebrow><h2 id="newsletter-heading">Good things are<br /><em>gathered slowly.</em></h2><p>Seasonal harvest notes, new arrivals and little moments of sweetness. Only when we have something worth saying.</p></div>
            <form className="newsletter-form" onSubmit={submitNewsletter}><label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label><div className="newsletter-input-row"><Mail size={17} /><input id="newsletter-email" name="newsletter-email" type="email" placeholder="you@example.com" autoComplete="email" required /><button type="submit" aria-label="Subscribe to the newsletter"><ArrowRight size={18} /></button></div><span className="newsletter-message" aria-live="polite">{newsletterDone ? <><Check size={13} /> Your address is saved in this browser.</> : 'A considered note, only when the season has something worth saying.'}</span></form>
          </div>
          <NewsletterStillLife />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><BrandMark light /><p>A little closer to nature.<br />A little more golden.<small>Redawan, Ikram Pur, Biozo Kharki, Katlang, Mardan 23090</small></p><a className="footer-top-link" href="#top">BACK TO THE TOP <ArrowUpRight size={14} /></a></div>
        <div className="footer-divider" />
        <div className="footer-columns">
          <div className="footer-news"><Eyebrow dark>A GOOD THING, FROM TIME TO TIME</Eyebrow><h3>Honey notes, <em>by post.</em></h3><button onClick={() => { document.getElementById('newsletter-email')?.focus(); window.scrollTo({ top: document.querySelector('.newsletter-section')?.offsetTop || 0, behavior: 'smooth' }); }}>Join our little list <ArrowRight size={14} /></button></div>
          <div className="footer-column"><h4>EXPLORE</h4><a href="#collection">The collection</a><a href="#origins">Our origins</a><a href="#harvest">How we harvest</a><a href="#experience">Kind words</a></div>
          <div className="footer-column"><h4>HERE TO HELP</h4><button onClick={() => scrollTo('delivery')}>Pakistan delivery</button><button onClick={() => setPanel('returns')}>Returns & care</button><a href={whatsappLink} target="_blank" rel="noreferrer">Contact · {BUSINESS_PHONE}</a><button onClick={() => setPanel('account')}>Your account</button></div>
          <div className="footer-column footer-social"><h4>FOLLOW THE BLOOM</h4><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram <ArrowUpRight size={12} /></a><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><span className="social-p">P</span> Pinterest <ArrowUpRight size={12} /></a><a href={whatsappLink} target="_blank" rel="noreferrer"><span className="social-wa">w</span> WhatsApp · 03429753834 <ArrowUpRight size={12} /></a><button onClick={() => setPanel('admin')}>Business settings</button></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SULTAN SHEHED. GATHERED WITH CARE.</span><span>CRAFTED WITH NATURE, NOT AGAINST IT.</span><span className="footer-legal"><button onClick={() => setPanel('privacy')}>Privacy</button><span>·</span><button onClick={() => setPanel('terms')}>Terms</button></span></div>
      </footer>

      <AnimatePresence>
        {panel && <div className="panel-layer" key="panel"><motion.button className="panel-backdrop" aria-label="Close panel" onClick={closePanel} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.24 }} /><motion.aside className="side-panel" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} role="dialog" aria-modal="true" aria-label={panelTitle(panel, activeProduct)} key={panel}>
          <div className="panel-header"><span className="panel-kicker">SULTAN SHEHED <span>✳</span></span><button className="panel-close" onClick={closePanel} aria-label="Close"><X size={21} /></button></div>
          {panel === 'product' && activeProduct && <ProductPanel product={activeProduct} priceFor={priceFor} onAdd={(product, qty, size) => addToCart(product, qty, size)} onOrder={prepareWhatsAppOrder} onOrigin={(product) => { const origin = origins.find((item) => item.productIds.includes(product.id)); if (origin) setSelectedOrigin(origin); scrollTo('origins'); }} />}
          {panel === 'cart' && <CartPanel lines={cartLines} subtotal={subtotal} pricesConfigured={allPricesConfigured} onQuantity={setItemQuantity} onRemove={removeFromCart} onContinue={() => { setPanel(null); scrollTo('collection'); }} onCheckout={() => { setOrderChannel('checkout'); setPanel('checkout'); }} onWhatsApp={() => prepareWhatsAppOrder(null)} />}
          {panel === 'checkout' && <CheckoutPanel lines={cartLines} subtotal={subtotal} pricesConfigured={allPricesConfigured} deliveryCharge={storeSettings.deliveryCharge} account={account} orderChannel={orderChannel} onSubmit={submitCheckout} onBack={() => setPanel('cart')} />}
          {panel === 'success' && orderConfirmation && <SuccessPanel order={orderConfirmation} onClose={closePanel} onWhatsApp={orderWhatsAppLink(orderConfirmation)} />}
          {panel === 'account' && <AccountPanel account={account} onSubmit={submitAccount} onSignOut={() => setAccount(null)} />}
          {panel === 'search' && <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={originFilter} setFilter={setOriginFilter} results={visibleProducts} onOpen={openProduct} onAdd={addToCart} priceFor={priceFor} />}
          {panel === 'admin' && <AdminPanel products={products} settings={storeSettings} onChange={setStoreSettings} />}
          {['shipping', 'returns', 'privacy', 'terms'].includes(panel) && <InfoPanel type={panel} />}
        </motion.aside></div>}
      </AnimatePresence>
      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Contact Sultan Shehed on WhatsApp at 03429753834"><span className="whatsapp-icon">w</span><span>WhatsApp · 03429753834</span></a>
    </div>
  );
}

function panelTitle(panel, product) {
  if (panel === 'product' && product) return product.name + ' details';
  return ({ cart: 'Your shopping bag', checkout: 'Pakistan delivery details', success: 'Order received', account: 'Your account', search: 'Find your honey', admin: 'Business settings', shipping: 'Shipping information', returns: 'Returns information', privacy: 'Privacy information', terms: 'Terms and conditions' })[panel] || 'Sultan Shehed';
}

function ProductPanel({ product, priceFor, onAdd, onOrder, onOrigin }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.sizes?.[0] || '250ml');
  const price = priceFor(product.id, size);
  return <div className="panel-body product-panel-body"><div className="detail-image detail-packshot"><ProductImage product={product} /><span className="detail-image-label">PAKISTAN · SMALL BATCH</span></div><div className="detail-eyebrow"><Eyebrow>{product.category.toUpperCase()} HONEY · {product.origin.toUpperCase()}</Eyebrow></div><h2 className="detail-title">{product.name}<em>{product.subtitle}</em></h2><p className="detail-description">{product.description}</p><div className="detail-tasting"><span>TASTING NOTES</span><p>{product.tasting}</p></div><div className="detail-origin"><span>EXPLORE THE ORIGIN</span><button onClick={() => onOrigin(product)}>{product.origin}<ArrowUpRight size={14} /></button></div><div className="detail-ingredients"><ShieldCheck size={17} /><span>Pure honey. Nothing added. Pakistan only.</span></div><div className="detail-size-picker"><span>CHOOSE A GLASS JAR</span><div>{product.sizes.map((option) => <button type="button" key={option} className={size === option ? 'detail-size-active' : ''} onClick={() => setSize(option)}>{option}</button>)}</div></div><div className="detail-price-row"><span>PRICE</span><strong>{money(price)}</strong></div><div className="detail-actions"><QuantityControl value={quantity} onChange={setQuantity} /><button className="button button-dark" onClick={() => onAdd(product, quantity, size)}>Add to bag <span>{money(price === null ? null : price * quantity)}</span></button></div><button className="detail-whatsapp whatsapp-glitter" onClick={() => onOrder(product, size, quantity)}><span className="social-wa">w</span> Continue with delivery details on WhatsApp</button><div className="detail-extra"><span>Delivery charges confirmed before dispatch</span><span>Recyclable protective packing</span></div><div className="detail-story"><span>THE STORY IN THE JAR</span><p>{product.details}</p></div></div>;
}

function CartPanel({ lines, subtotal, pricesConfigured, onQuantity, onRemove, onContinue, onCheckout, onWhatsApp }) {
  return <div className="panel-body cart-panel-body"><div className="cart-heading"><h2>Your bag<span>({lines.reduce((sum, item) => sum + item.quantity, 0)})</span></h2><p>Every jar, gathered with care.</p></div>{lines.length === 0 ? <div className="cart-empty"><div className="empty-mark">G</div><h3>A little room for<br /><em>something golden.</em></h3><p>Your bag is waiting for its first jar.</p><button className="button button-dark" onClick={onContinue}>Explore the collection <ArrowRight size={15} /></button></div> : <><div className="cart-items">{lines.map(({ product, size, quantity, unitPrice, lineTotal }) => <article className="cart-item" key={product.id + size}><button className="cart-item-image" onClick={() => { window.location.hash = '#product/' + product.id; }} aria-label={'View ' + product.name}><ProductImage product={product} compact decorative /></button><div className="cart-item-content"><span className="cart-item-origin">{product.origin} · {size}</span><strong>{product.name}</strong><span className="cart-item-subtitle">{product.subtitle}</span><div className="cart-item-bottom"><QuantityControl value={quantity} compact onChange={(value) => onQuantity(product.id, size, value)} /><strong>{unitPrice === null ? 'Price on request' : money(lineTotal)}</strong></div></div><button className="cart-remove" aria-label={'Remove ' + product.name + ' ' + size} onClick={() => onRemove(product.id, size)}><X size={15} /></button></article>)}</div><div className="cart-promise"><span><Check size={14} /> Pakistan delivery, arranged personally</span><small>Delivery charge and estimated arrival are confirmed on WhatsApp.</small></div><div className="cart-summary"><div><span>Product subtotal</span><strong>{pricesConfigured ? money(subtotal) : 'To be confirmed'}</strong></div><p>Final total includes the delivery fee confirmed with you.</p><button className="button button-dark cart-checkout" onClick={onCheckout}>Add delivery details <ArrowRight size={16} /></button><button className="whatsapp-order whatsapp-glitter" onClick={onWhatsApp}><span className="social-wa">w</span> Complete your order on WhatsApp</button></div></>}</div>;
}

function CheckoutPanel({ lines, subtotal, pricesConfigured, deliveryCharge, account, orderChannel, onSubmit, onBack }) {
  const [payment, setPayment] = useState('cod');
  if (!lines.length) return <div className="panel-body cart-empty"><h3>Your bag is empty.</h3><button className="button button-dark" onClick={onBack}>Return to your bag</button></div>;
  return <div className="panel-body checkout-panel-body"><button className="back-link" onClick={onBack}><ArrowLeft size={15} /> Back to your bag</button><div className="cart-heading"><h2>Almost <em>yours.</em></h2><p>{orderChannel === 'whatsapp' ? 'Complete your details to prepare the WhatsApp order.' : 'Tell us where to send your honey.'}</p></div><form className="checkout-form" onSubmit={onSubmit}><label>YOUR DETAILS</label><div className="form-row"><input name="name" placeholder="Full name" autoComplete="name" required defaultValue={account?.name || ''} /><input name="email" type="email" placeholder="Email address" autoComplete="email" required defaultValue={account?.email || ''} /></div><div className="form-row"><input name="phone" type="tel" placeholder="03XX XXXXXXX" autoComplete="tel" pattern="(?:\\+92|0)3[0-9]{9}" title="Enter a Pakistani mobile number, for example 03429753834 or +923429753834" required /><input name="city" placeholder="City" autoComplete="address-level2" required /></div><input name="address" placeholder="Complete delivery address" autoComplete="street-address" required /><div className="form-row"><input name="postalCode" inputMode="numeric" pattern="[0-9]{5}" placeholder="Postal code (5 digits)" autoComplete="postal-code" title="Enter a 5-digit Pakistani postal code" required /><input value="Pakistan" aria-label="Country" readOnly /></div><label>PAYMENT PREFERENCE</label><div className="payment-options"><button type="button" className={'payment-option' + (payment === 'cod' ? ' payment-active' : '')} onClick={() => setPayment('cod')}><span className="payment-radio" />Cash on delivery <small>Confirm availability on WhatsApp</small></button><button type="button" className={'payment-option' + (payment === 'whatsapp' ? ' payment-active' : '')} onClick={() => setPayment('whatsapp')}><span className="payment-radio" />Arrange by WhatsApp <small>We’ll confirm personally</small></button></div><input type="hidden" name="payment" value={payment} /><div className="checkout-summary"><span>YOUR ORDER · PAKISTAN</span>{lines.map((item) => <div key={item.lineId}><span>{item.quantity} × {item.product.name} · {item.size}</span><strong>{money(item.lineTotal)}</strong></div>)}<div><span>Product subtotal</span><strong>{pricesConfigured ? money(subtotal) : 'To be confirmed'}</strong></div><div><span>Delivery charges</span><strong>{money(deliveryCharge)}</strong></div><div className="checkout-total"><span>Total</span><strong>{pricesConfigured && deliveryCharge !== null ? money(subtotal + Number(deliveryCharge)) : 'To be confirmed'}</strong></div><small>We confirm delivery fees and estimated arrival before dispatch.</small></div><button className="button button-dark checkout-submit" type="submit">{orderChannel === 'whatsapp' ? 'Prepare WhatsApp order' : 'Place order via WhatsApp'} <ArrowRight size={16} /></button><p className="checkout-note"><ShieldCheck size={14} /> This is an order request. No payment is taken online.</p></form></div>;
}

function SuccessPanel({ order, onClose, onWhatsApp }) {
  return <div className="panel-body success-panel"><div className="success-icon"><Check size={25} /></div><Eyebrow>THANK YOU, {order.name.split(' ')[0].toUpperCase()}</Eyebrow><h2>Your order<br /><em>is ready to confirm.</em></h2><p>Your order request has been saved here. Send the complete details on WhatsApp so we can confirm availability, delivery and payment.</p><div className="success-reference"><span>ORDER REFERENCE</span><strong>{order.reference}</strong><small>{order.items.length} item{order.items.length === 1 ? '' : 's'} · {money(order.total)} total</small></div><div className="shipping-label"><div className="shipping-label-brand"><strong>SULTAN SHEHED</strong><span>PAKISTAN · ORDER SHIPPING DETAILS</span></div><div className="shipping-label-columns"><div><small>FROM</small><strong>Redawan, Ikram Pur, Biozo Kharki, Katlang<br />Mardan 23090, Pakistan</strong><span>{BUSINESS_PHONE}</span></div><div><small>TO</small><strong>{order.name}</strong><span>{order.phone}</span><span>{order.address}</span><span>{order.city} · {order.postalCode}</span></div></div><div className="shipping-label-order"><small>ORDER INFORMATION</small><span>{order.reference} · {new Date(order.createdAt).toLocaleDateString('en-PK')}</span><span>{order.items.map((item) => item.product.name + ' · ' + item.size + ' × ' + item.quantity).join(' / ')}</span><span>Total · {money(order.total)} · {order.paymentLabel}</span></div><small className="shipping-label-note">Shipping information label · not a courier-issued waybill</small></div><div className="shipping-label-actions"><button className="button button-outline-dark" onClick={() => window.print()}>Print shipping label</button><button className="button button-outline-dark" onClick={() => downloadShippingPdf(order)}>Download label as PDF</button></div><a className="button button-dark success-whatsapp" href={onWhatsApp} target="_blank" rel="noreferrer"><span className="social-wa">w</span> Send order confirmation on WhatsApp</a><button className="success-close" onClick={onClose}>Return to Sultan Shehed <ArrowRight size={15} /></button><small className="local-order-note">Your order data is saved in this browser preview.</small></div>;
}

function AccountPanel({ account, onSubmit, onSignOut }) {
  if (account) return <div className="panel-body account-panel"><div className="account-avatar">{(account.name || account.email).charAt(0).toUpperCase()}</div><Eyebrow>WELCOME BACK</Eyebrow><h2>A little more<br /><em>golden, always.</em></h2><p>Your details are saved in this browser for a smoother checkout.</p><div className="account-details"><span>YOUR NAME<strong>{account.name || 'Honey lover'}</strong></span><span>EMAIL ADDRESS<strong>{account.email}</strong></span></div><button className="button button-dark" onClick={onSignOut}>Sign out</button><p className="account-storage-note">This preview saves your profile on this device only. A connected account service can be added for a live storefront.</p></div>;
  return <div className="panel-body account-panel"><div className="account-avatar"><CircleUserRound size={25} /></div><Eyebrow>YOUR SULTAN SHEHED</Eyebrow><h2>Your little<br /><em>corner of gold.</em></h2><p>Save your details for a more considered checkout.</p><form className="account-form" onSubmit={onSubmit}><label htmlFor="account-name">YOUR NAME</label><input id="account-name" name="account-name" placeholder="Full name" autoComplete="name" required /><label htmlFor="account-email">EMAIL ADDRESS</label><input id="account-email" name="account-email" type="email" placeholder="you@example.com" autoComplete="email" required /><button className="button button-dark" type="submit">Save my details <ArrowRight size={16} /></button></form><div className="account-note"><ShieldCheck size={15} /><span>Your profile is stored on this device only. No password is collected.</span></div></div>;
}

function SearchPanel({ searchTerm, setSearchTerm, filter, setFilter, results, onOpen, onAdd, priceFor }) {
  return <div className="panel-body search-panel"><div className="search-heading"><Eyebrow>FIND YOUR HONEY</Eyebrow><h2>Follow a<br /><em>little curiosity.</em></h2></div><label className="search-input-wrap"><Search size={18} /><input autoFocus type="search" placeholder="Try ‘Pulosah’ or ‘mountain’" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /><button type="button" onClick={() => setSearchTerm('')} aria-label="Clear search"><X size={15} /></button></label><div className="search-filters">{['All honey', 'Floral', 'Mountain'].map((option) => <button type="button" key={option} className={filter === option ? 'filter-active' : ''} onClick={() => setFilter(option)}>{option}</button>)}</div><span className="search-results-label">{results.length} {results.length === 1 ? 'HONEY' : 'HONEYS'} TO DISCOVER</span><div className="search-results">{results.map((product) => <article key={product.id} className="search-result"><button className="search-result-image" aria-label={'View ' + product.name + ' details'} onClick={() => onOpen(product)}><ProductImage product={product} compact decorative /></button><button className="search-result-name" onClick={() => onOpen(product)}><strong>{product.name}</strong><span>{product.origin} · {product.sizes[0]}</span></button><strong className="search-result-price">{money(priceFor(product.id, product.sizes[0]))}</strong><button className="search-result-add" onClick={() => onAdd(product, 1, product.sizes[0])} aria-label={'Add ' + product.name + ' ' + product.sizes[0] + ' to bag'}><Plus size={17} /></button></article>)}{results.length === 0 && <div className="search-no-results"><span>✳</span><p>Nothing by that name just yet.<br />Try another search or browse all honey.</p><button onClick={() => { setSearchTerm(''); setFilter('All honey'); }}>{'Clear filters'}</button></div>}</div></div>;
}

function AdminPanel({ products: items, settings, onChange }) {
  const setPrice = (productId, size, rawValue) => {
    const price = rawValue === '' ? null : Math.max(0, Number(rawValue));
    onChange((current) => ({ ...current, prices: { ...current.prices, [productId]: { ...current.prices?.[productId], [size]: price } } }));
  };
  const setDelivery = (rawValue) => onChange((current) => ({ ...current, deliveryCharge: rawValue === '' ? null : Math.max(0, Number(rawValue)) }));
  const setEstimate = (value) => onChange((current) => ({ ...current, deliveryEstimate: value }));
  return <div className="panel-body admin-panel"><Eyebrow>SULTAN SHEHED · PAKISTAN</Eyebrow><h2>Business<br /><em>settings.</em></h2><p>Product prices and delivery details are stored on this device. Leave a price blank until it is confirmed.</p><div className="admin-setting-group"><span>PRODUCT PRICES · PKR</span>{items.map((product) => <div className="admin-price-row" key={product.id}><strong>{product.name}</strong>{product.sizes.map((size) => <label key={size}><span>{size}</span><input aria-label={product.name + ' ' + size + ' price in PKR'} type="number" min="0" step="1" placeholder="Set price" value={settings.prices?.[product.id]?.[size] ?? ''} onChange={(event) => setPrice(product.id, size, event.target.value)} /></label>)}</div>)}</div><div className="admin-setting-group admin-shipping-settings"><span>PAKISTAN DELIVERY</span><label>Delivery charge (PKR)<input type="number" min="0" step="1" placeholder="Confirm with customer" value={settings.deliveryCharge ?? ''} onChange={(event) => setDelivery(event.target.value)} /></label><label>Estimated delivery guidance<input type="text" placeholder="Leave blank until verified" value={settings.deliveryEstimate || ''} onChange={(event) => setEstimate(event.target.value)} /></label></div><div className="admin-saved-note"><Check size={15} /> Changes save automatically in this browser.</div><p className="admin-warning">This local settings panel is not password-protected and does not sync across devices. Connect a secure admin system before publishing live prices.</p></div>;
}

function InfoPanel({ type }) {
  const data = {
    shipping: { eyebrow: 'PACKED WITH CARE', title: <>The journey<br /><em>to your door.</em></>, paragraphs: ['We arrange delivery across Pakistan from Redawan, Ikram Pur, Biozo Kharki, Katlang, Mardan 23090.', 'Delivery charges and estimated arrival are confirmed personally on WhatsApp before dispatch. We do not publish unverified courier timings.', 'Use the delivery form to share your full address, city and postal code.'] },
    returns: { eyebrow: 'A PROMISE OF CARE', title: <>Made right.<br /><em>Made for you.</em></>, paragraphs: ['If your honey arrives damaged or anything is not quite right, message us within seven days and we will make it right.', 'For food safety, we cannot accept returns on opened jars. Unopened gifts may be returned in their original packaging.', 'Please include your order reference so we can help quickly.'] },
    privacy: { eyebrow: 'A QUIET PROMISE', title: <>Your details,<br /><em>kept with care.</em></>, paragraphs: ['This storefront preview keeps your cart, newsletter sign-up, account profile and order request in your browser storage.', 'No password or payment details are collected. No backend service is connected to this preview.', 'For a live storefront, customer data handling and payment processing should be connected to a secure commerce platform.'] },
    terms: { eyebrow: 'THE THOUGHTFUL DETAILS', title: <>Simple terms.<br /><em>Honest honey.</em></>, paragraphs: ['Honey is a natural product. Color, texture and crystallization vary by harvest and are not defects.', 'Prices and availability shown here are part of a storefront preview. Order requests are saved in your browser and require personal confirmation.', 'Our honey is intended for adults and children over twelve months of age.'] },
  }[type];
  return <div className="panel-body info-panel"><Eyebrow>{data.eyebrow}</Eyebrow><h2>{data.title}</h2>{data.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="info-contact" href={whatsappUrl('Hello Sultan Shehed, I have a question.')} target="_blank" rel="noreferrer">Have a question? Message us <ArrowUpRight size={15} /></a><div className="info-mark">S</div></div>;
}

export default App;
