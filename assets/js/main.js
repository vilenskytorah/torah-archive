// תאריך עברי אוטומטי
function getHebrewDate(date = new Date()) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    calendar: 'hebrew'
  };
  let hebrewDate = date.toLocaleDateString('he-IL', options);
  hebrewDate = hebrewDate.replace('תש', 'תש"');
  return hebrewDate;
}

// עדכון כל התאריכים בעמוד
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hebrew-date').forEach(el => {
    el.textContent = getHebrewDate();
  });

  // כאן יגיע בהמשך קוד לגלגלת פנינים
  console.log("✅ אתר אוצר תורה טעון בהצלחה");
});
