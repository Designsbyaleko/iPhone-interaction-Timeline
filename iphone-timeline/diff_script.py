import pathlib
import difflib
import sys

sys.stdout.reconfigure(encoding="utf-8")

repo = pathlib.Path(r"c:/Users/ajfit/OneDrive/Culture_Design_A3_Web/iphone-timeline")
orig_root = repo / "orig"

files = [
    ("src/App.jsx", orig_root / "App.jsx"),
    ("src/components/Card2007.jsx", orig_root / "components" / "Card2007.jsx"),
    ("src/components/Card2013.jsx", orig_root / "components" / "Card2013.jsx"),
    ("src/components/Card2017.jsx", orig_root / "components" / "Card2017.jsx"),
    ("src/milestones.js", orig_root / "milestones.js"),
]

for new_rel, orig_path in files:
    new_path = repo / new_rel
    orig_text = orig_path.read_text(encoding="utf-8") if orig_path.exists() else ""
    new_text = new_path.read_text(encoding="utf-8") if new_path.exists() else ""
    diff = difflib.unified_diff(
        orig_text.splitlines(),
        new_text.splitlines(),
        fromfile=f"a/{new_rel}",
        tofile=f"b/{new_rel}",
        lineterm=""
    )
    print("\n".join(diff))
    print()
