// Example JavaScript for simple animations or interactions

// Subscribe button (top-left) example: fade highlight effect
const subscribeBtn = document.querySelector('.btn-subscribe');
subscribeBtn.addEventListener('click', () => {
    subscribeBtn.style.backgroundColor = '#ffd700'; // gold highlight
    setTimeout(() => {
        subscribeBtn.style.backgroundColor = '#fff'; // revert after 500ms
    }, 500);
    alert('Thank you for subscribing!');
});

// Share button (top-right) example: share link or show a message
const shareBtn = document.querySelector('.btn-share');
shareBtn.addEventListener('click', () => {
    // You could use navigator.share() if supported, or simply copy the link
    alert('Link copied to clipboard (simulate)!');
    // Real approach: copy link to user’s clipboard
    // navigator.clipboard.writeText(window.location.href);
});