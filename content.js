/*
  このファイルだけを編集すれば、サイトの文章・作品情報を更新できます。
  写真は images フォルダへ置き、image にパスを入力してください。
  例: image: './images/work-01.jpg'
  image を空欄のままにすると、現在のグレーの仮画像が表示されます。
*/

export const siteContent = {
  about: {
    image: './images/about.jpg',
    text: '三森楓花/Fuka Mimori　武蔵野美術大学卒業。デザイナー1年目。グラフィックデザイン。最近は仕組みを考えることに興味があります。虫が好き。',
  },
  contact: {
    text: 'ご相談やご依頼は、こちらからお気軽にご連絡ください。\n\nInstagram / @fuka_mimori',
  },
  experimentsDescription: 'プロトタイプや気軽な作品を載せています。',
};

// 各一覧は10枠です。空の { ... } に作品情報を入力してください。
// 画像を入れるときは、image: './images/画像名.jpg' のように指定します。
export const galleries = {
  works: [
  { title: 'te to te', year: 'branding design / 2025', image: 'te to te.jpg', color: '#a6a6a6', text: '見知らぬ誰かと「お疲れさま」を贈りあう。バスギフトの仕組みの提案。' },
  { title: 'bugs', year: 'product design / 2025', image: 'bugs.jpg', color: '#c1bbb2', text: 'つい失くしがちな小物を身にまとい、失くしものを減らす手助けをするための虫型の小物置き。' },
  { title: 'くるピタにほんごランド', year: 'UX direction / 2024', image: 'くるピタにほんごランド.jpg', color: '#9ea8a2', text: '「サバイバル日本語」を学ぶ、日本に住んでまだ間もない子供たちのための語学学習ツール。' },
  { title: '山歳時記', year: 'UX design / 2024', image: '山歳時記.jpg', color: '#b8adb0', text: '日本ならではの食文化「山菜」を知るための、都市部に暮らす子供たちに向けた食育を促すツール。' },
  { title: 'blooming days', year: 'product design / 2025', image: 'blooming days.jpg', color: '#aaa8a0', text: '1日を実感するための、めくって花がさくカレンダー。あっという間に過ぎてしまう1年をポジティブに捉えるためのツール。' },
  { title: '[ether] shop direction', year: 'art direction / 2025', image: '[ether] shop direction.jpg', color: '#a6a6a6', text: '武蔵野美術大学芸術祭にて有志で出店したショップのプロモーションをディレクション。' },
  { title: '武蔵野美術大学視覚伝達デザイン学科 卒業・修了制作展2025', year: 'art direction　graphic design / 2026', image: '武蔵野美術大学視覚伝達デザイン学科 卒業・修了制作展2025.jpg', color: '#a6a6a6', text: '卒業を間近に控えた、次の段階に移る学生の緊張感や「変化の直前」にある姿を「青い蛹」というテーマを通して可視化した。' },
  { title: 'Disolved,become.', year: 'graphic design / 2026', image: 'Disolved,become..jpg', color: '#a6a6a6', text: '蝶は蛹の中で液体となり、身体が再生成される。私たちから見えない生き物の形の生まれを、空間を使ったグラフィックで表現した。' },
  { title: 'ZINE 20', year: 'graphic design / 2023', image: 'ZINE 20.jpg', color: '#a6a6a6', text: '20歳の節目に自分のこれまで作ったグラフィックをまとめた小冊子を制作した。' },
  { title: 'Asteroid Expedition Disease Record', year: 'graphic design / 2024', image: 'Asteroid Expedition Disease Record.jpg', color: '#a6a6a6', text: '人間が宇宙さえも労働環境になった未来では、いろいろな疾病が発生すると思い、もしものための記録をまとめました。' },
  ],
  experiments: [
  { title: 'laser cutter01', year: '2025', image: 'laser cutter01.jpg', color: '#adb4bd', text: 'レーザーカッターで製作したレースパターンを切ってみました。背中に刺繍が入っているように見える。' },
  { title: 'product01', year: '2026', image: 'product01.jpg', color: '#b5ad9e', text: 'アクリルをカットして、花モチーフのインテリアを作れないかと思い試作。' },
  { title: 't-shirt01', year: '2026', image: 't-shirt01.jpg', color: '#a6a6a6', text: '自作のグラフィックをTシャツにプリントしました。ゲームのインベントリ画面のようなイメージ。' },
  { title: 't-shirt02', year: '2026', image: 't-shirt02.jpg', color: '#a6a6a6', text: '自作のグラフィックをTシャツにプリントしました。ボーリング調査を意識。' },
  { title: 'experiments_05', year: '', image: 'experiments_05.jpg', color: '#a6a6a6', text: '' },
  { title: 'experiments_06', year: '', image: 'experiments_06.jpg', color: '#a6a6a6', text: '' },
  { title: 'experiments_07', year: '', image: 'experiments_07.jpg', color: '#a6a6a6', text: '' },
  { title: 'experiments_08', year: '', image: 'experiments_08.jpg', color: '#a6a6a6', text: '' },
  { title: 'experiments_09', year: '', image: 'experiments_09.jpg', color: '#a6a6a6', text: '' },
  { title: 'experiments_10', year: '', image: 'experiments_10.jpg', color: '#a6a6a6', text: '' },
  ],
  graphics: [
  { title: 'graphics_01', year: '', image: 'graphics_01.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_02', year: '', image: 'graphics_02.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_03', year: '', image: 'graphics_03.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_04', year: '', image: 'graphics_04.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_05', year: '', image: 'graphics_05.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_06', year: '', image: 'graphics_06.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_07', year: '', image: 'graphics_07.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_08', year: '', image: 'graphics_08.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_09', year: '', image: 'graphics_09.jpg', color: '#a6a6a6', text: '' },
  { title: 'graphics_10', year: '', image: 'graphics_10.jpg', color: '#a6a6a6', text: '' },
  ],
};
