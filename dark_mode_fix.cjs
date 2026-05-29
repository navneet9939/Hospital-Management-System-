const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.blade.php')) results.push(file);
        }
    });
    return results;
}

const files = walk('./resources/views');
let modified = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // We will look for class="..." and inject dark classes.
    content = content.replace(/class="([^"]*bg-white[^"]*)"/g, (match, p1) => {
        if (!p1.includes('dark:bg-') && !p1.includes('dark:bg-transparent')) {
            let newClass = p1.replace('bg-white', 'bg-white dark:bg-slate-800')
                             .replace('border-slate-200', 'border-slate-200 dark:border-slate-700')
                             .replace('text-slate-900', 'text-slate-900 dark:text-slate-100');
            return 'class="' + newClass + '"';
        }
        return match;
    });

    content = content.replace(/class="([^"]*bg-slate-50[^"]*)"/g, (match, p1) => {
        // Also fix bg-slate-50 which is often used for tables and headers
        if (!p1.includes('dark:bg-') && !p1.includes('bg-slate-500')) {
            let newClass = p1.replace('bg-slate-50', 'bg-slate-50 dark:bg-slate-800')
                             .replace('border-slate-200', 'border-slate-200 dark:border-slate-700')
                             .replace('text-slate-900', 'text-slate-900 dark:text-slate-100');
            return 'class="' + newClass + '"';
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content);
        modified++;
    }
});

console.log('Modified files: ' + modified);
