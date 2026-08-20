/*
  このファイルだけを編集すれば、サイトの文章・作品情報を更新できます。
  写真は images フォルダへ置き、image にパスを入力してください。
  例: image: './images/work-01.jpg'
  image を空欄のままにすると、現在のグレーの仮画像が表示されます。
*/

export const siteContent = {
  about: {
    image: '',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  contact: {
    text: 'プロジェクトのご相談やご依頼は、こちらからお気軽にご連絡ください。\n\nhello@example.com\nInstagram / @yourname',
  },
  experimentsDescription: 'プロトタイプや気軽な作品を載せています。',
};

// 各一覧は10枠です。空の { ... } に作品情報を入力してください。
// 画像を入れるときは、image: './images/画像名.jpg' のように指定します。
export const galleries = {
  works: [
  { title: 'Visual identity', year: 'graphic design / 2025', image: '', color: '#a6a6a6', text: 'Identity system and printed matter.' },
  { title: 'Archive object', year: 'editorial / 2024', image: '', color: '#c1bbb2', text: 'An editorial experiment about collecting.' },
  { title: 'Soft signal', year: 'art direction / 2024', image: '', color: '#9ea8a2', text: 'Art direction for a quiet digital campaign.' },
  { title: 'Common field', year: 'graphic design / 2023', image: '', color: '#b8adb0', text: 'Poster series for an independent programme.' },
  { title: 'Everyday tools', year: 'product / 2023', image: '', color: '#aaa8a0', text: 'Prototype objects for daily rituals.' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  ],
  experiments: [
  { title: 'After image', year: 'experiment / 2022', image: '', color: '#adb4bd', text: 'A moving-image study of memory.' },
  { title: 'Folded note', year: 'editorial / 2022', image: '', color: '#b5ad9e', text: 'A small publication designed to unfold.' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  ],
  graphics: [
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  { title: '', year: '', image: '', color: '#a6a6a6', text: '' },
  ],
};
