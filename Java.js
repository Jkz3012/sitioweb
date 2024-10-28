document.addEventListener('DOMContentLoaded', () => {
    const months = document.querySelectorAll('.month');
    months.forEach((month, index) => {
        setTimeout(() => {
            month.style.opacity = '1';
            month.style.transform = 'translateY(0)';
        }, index * 300);
    });
});
