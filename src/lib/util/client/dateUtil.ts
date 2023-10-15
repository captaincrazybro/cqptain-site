const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatExperienceDate(dateStr: Date) {
    let date = new Date(dateStr)
    return `${months[date.getMonth()]} ${date.getFullYear()}`
}

export function getMonthName(date: Date) {
    return months[date.getMonth()]
}