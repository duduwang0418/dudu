// 取得按鈕與音樂元素
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

// 狀態變數：是否正在播放
let isPlaying = false;

// 點擊事件監聽器
musicToggle.addEventListener('click', function () {
  if (!isPlaying) {
    // 若目前沒在播放，則播放音樂並切換圖示
    bgMusic.play();
    musicToggle.classList.add('playing');
    isPlaying = true;
  } else {
    // 若目前在播放，則暫停音樂並切換回播放圖示
    bgMusic.pause();
    musicToggle.classList.remove('playing');
    isPlaying = false;
  }
});
