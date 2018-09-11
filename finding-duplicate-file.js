/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  const filesMap = {};
  paths.forEach(path => {
      const splitPath = path.split(' ');
      const dir = splitPath.shift();
      splitPath.forEach(file => {
          const parenIndex = file.indexOf('(');
          const content = file.substring(parenIndex+1, file.length - 1);
          const filePath = file.substring(0, parenIndex);
          const fullPath = `${dir}/${filePath}`;
          if(filesMap[content]) {
              filesMap[content] = [...filesMap[content], fullPath];
          } else {
              filesMap[content] = [fullPath];
          }
      });
  });
  
  return Object.values(filesMap)
      .filter(files => files.length > 1);
};

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]));