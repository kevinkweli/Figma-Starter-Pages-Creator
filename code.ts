let pages = [
  "✨ Cover",
  "---",
  "🎨 Design - in Progress",
  "🧶 Temporaly saved",
  "---",
  "⚙️ Components",
  "🧩 Assets",
  "💡 Inspirations",
  "---",
  "🗑️ Trashbin"
]

let currentPage = figma.currentPage;
currentPage.name = pages[0]

for (let page of pages.slice(1)) {
  let newPage = figma.createPage();
  newPage.name = page
}

figma.notify("Pages created successfully! 💫");

figma.closePlugin();