const sodaPop = document.getElementById('soda');
const cheeseSlice = document.getElementById('cheese');
const grapeVine = document.getElementById('grapes');
const breadLoaf = document.getElementById('bread');
const watermelonSlice = document.getElementById('watermelon');
const button = document.getElementById('button');

// const item = ['soda', 'cheese', 'grapes', 'bread', 'watermelon'];

sodaPop.addEventListener('click', () => {
    sodaPop.classList.toggle('picked');
});
cheeseSlice.addEventListener('click', () => {
    cheeseSlice.classList.toggle('picked');
});
grapeVine.addEventListener('click', () => {
    grapeVine.classList.toggle('picked');
});
breadLoaf.addEventListener('click', () => {
    breadLoaf.classList.toggle('picked');
});
watermelonSlice.addEventListener('click', () => {
    watermelonSlice.classList.toggle('picked');
});

button.addEventListener('click', () => {
    const item = [bread, soda, watermelon, grapes, cheese];
    item[Math.floor(Math.random() * 5)].classList.toggle('picked');
})

