document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendar-body');
    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');

    let currentDate = new Date();

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    function populateMonthSelect() {
        months.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.text = month;
            monthSelect.appendChild(option);
        });
    }

    function populateYearSelect() {
        const currentYear = currentDate.getFullYear();
        for (let year = currentYear - 5; year <= currentYear + 5; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.text = year;
            yearSelect.appendChild(option);
        }
    }

    function renderCalendar() {
        calendarBody.innerHTML = ''; // Limpiar el calendario

        const month = parseInt(monthSelect.value);
        const year = parseInt(yearSelect.value);

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let date = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < firstDayOfMonth) {
                    cell.innerHTML = '';
                } else if (date > daysInMonth) {
                    cell.innerHTML = '';
                } else {
                    cell.innerHTML = date;
                    date++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    // Al cambiar mes o año, se vuelve a renderizar el calendario
    monthSelect.addEventListener('change', renderCalendar);
    yearSelect.addEventListener('change', renderCalendar);

    // Inicializar selectores y calendario
    populateMonthSelect();
    populateYearSelect();

    // Establecer el mes y año actuales como seleccionados
    monthSelect.value = currentDate.getMonth();
    yearSelect.value = currentDate.getFullYear();

    renderCalendar(); // Renderizar el calendario al cargar la página
});
