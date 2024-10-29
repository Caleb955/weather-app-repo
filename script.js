const defaultCity = 'lagos';

callData(defaultCity)

function callData(param) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f3de53af26e355c5e83c978501da034c&units=metric`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)

        if (data.weather[0].main === 'Clouds') {
            const cloud = `
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 68.22">
                <path d="M61.84,33c-.54.26-1.07.55-1.61.87a38.31,38.31,0,0,0-4.82,3.42l-3.46-4a27.65,27.65,0,0,1,3.87-3,27.13,27.13,0,0,1,3.41-1.9c.47-.24,1-.46,1.44-.67A21.15,21.15,0,0,0,53,19.88a3.79,3.79,0,0,1-.34-.2c-.43-.25-.87-.47-1.31-.69a22.78,22.78,0,0,0-12-2.08,21.66,21.66,0,0,0-11.18,4.37,21,21,0,0,0-7.69,13l-.34,1.8-1.79.32a24.63,24.63,0,0,0-4.7,1.26,16.06,16.06,0,0,0-3.56,1.91,11.46,11.46,0,0,0-2.15,2,12.15,12.15,0,0,0-2.74,7.95A14.41,14.41,0,0,0,8,57.77a13.45,13.45,0,0,0,2.27,2.44,11.24,11.24,0,0,0,3,1.77,15,15,0,0,0,3.64,1h52a26.31,26.31,0,0,0,6.66-2.5,14.56,14.56,0,0,0,4.58-3.87,15.89,15.89,0,0,0,2.71-9.22,18.33,18.33,0,0,0-2.57-9.93,16.25,16.25,0,0,0-1.61-2.07,12.5,12.5,0,0,0-9.28-4A18.34,18.34,0,0,0,61.84,33ZM52.91,13.92a25.4,25.4,0,0,1,12.9-11.8A28,28,0,0,1,86.66,1.9a26.43,26.43,0,0,1,14.1,12.89,20.85,20.85,0,0,1,3.43-.26,17.62,17.62,0,0,1,13.11,5.69,20.92,20.92,0,0,1,2.16,2.8,23.61,23.61,0,0,1,3.42,12.83,21.11,21.11,0,0,1-3.76,12.33,19.6,19.6,0,0,1-6.21,5.32,31.65,31.65,0,0,1-8.37,3.1l-.58.08H86.06a16,16,0,0,1-1.81,3,19.56,19.56,0,0,1-6.2,5.32,31.78,31.78,0,0,1-8.37,3.1l-.59.07H16.75l-.33,0a20.07,20.07,0,0,1-5.22-1.34,16.51,16.51,0,0,1-4.34-2.6,18.62,18.62,0,0,1-3.15-3.38A19.72,19.72,0,0,1,0,49.53,17.34,17.34,0,0,1,4,38.18a16.8,16.8,0,0,1,3.1-2.89,21,21,0,0,1,4.75-2.54,29.92,29.92,0,0,1,3.95-1.21A25.86,25.86,0,0,1,25,17.12a26.8,26.8,0,0,1,13.91-5.44,27.9,27.9,0,0,1,14,2.24ZM87.66,51.4h16a25.8,25.8,0,0,0,6.66-2.5A14.21,14.21,0,0,0,114.91,45a15.87,15.87,0,0,0,2.71-9.22,18.27,18.27,0,0,0-2.57-9.93,14.63,14.63,0,0,0-1.61-2.07,12.43,12.43,0,0,0-9.27-4,18.34,18.34,0,0,0-7.47,1.65c-.53.27-1.07.56-1.6.87a37.68,37.68,0,0,0-4.83,3.42l-3.46-4a28.25,28.25,0,0,1,3.87-3,27.85,27.85,0,0,1,3.41-1.9c.48-.23,1-.46,1.44-.67A21.12,21.12,0,0,0,84.75,6.81a22.71,22.71,0,0,0-8.52-1.55A22.48,22.48,0,0,0,67.83,7,20.25,20.25,0,0,0,57.5,16.52a26.45,26.45,0,0,1,8.39,9.82,20.94,20.94,0,0,1,3.43-.26,17.57,17.57,0,0,1,13.11,5.69,20.67,20.67,0,0,1,2.17,2.79A23.64,23.64,0,0,1,88,47.4a26.67,26.67,0,0,1-.36,4Z"/>
                </svg>
            `;
    
            changeCloud(cloud)
        } else if (data.weather[0].main === 'Clear') {
            const cloud = `
                <svg class="svg-icon" data-name="Layer 1" viewBox="0 0 122.88 122.88">
                        <defs><style>.cls-1{fill:#fcdb33;}</style></defs><path class="cls-1" d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/>
                    </svg>
            `;
    
            changeCloud(cloud)
        } else if (data.weather[0].main === 'Rain') {
            const cloud = `
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 114.13" style="enable-background:new 0 0 122.88 114.13" xml:space="preserve"><g><path d="M39.5,97.74c0.41-2.14,2.47-3.54,4.61-3.13c2.14,0.41,3.54,2.47,3.13,4.61l-1.35,6.99c-0.41,2.14-2.47,3.54-4.61,3.13 c-2.14-0.41-3.54-2.47-3.13-4.61L39.5,97.74L39.5,97.74z M23.84,71.8c2.01,0.25,3.43,2.09,3.18,4.1s-2.09,3.43-4.1,3.18 c-2.67-0.34-5.09-0.97-7.29-1.88c-2.27-0.94-4.28-2.15-6.05-3.63c-1.68-1.4-3.15-2.99-4.4-4.72C1.84,64.25,0.04,58.63,0,53.03 c-0.04-5.66,1.72-11.29,5.52-15.85c1.23-1.48,2.68-2.84,4.34-4.04c1.93-1.4,4.14-2.58,6.64-3.55c1.72-0.67,3.56-1.23,5.5-1.68 c2.2-8.74,6.89-15.47,12.92-20.14c5.64-4.37,12.43-6.92,19.42-7.59c6.96-0.67,14.12,0.51,20.55,3.6 c7.02,3.37,13.14,8.98,17.11,16.87c1.6-0.25,3.2-0.38,4.79-0.36c6.72,0.05,13.2,2.45,18.3,7.95c1.07,1.15,2.08,2.45,3.02,3.9 c3.2,4.92,4.84,11.49,4.77,17.92c-0.07,6.31-1.77,12.59-5.25,17.22c-2.27,3.01-5.18,5.47-8.67,7.42 c-3.36,1.88-7.28,3.31-11.68,4.33c-1.98,0.45-3.95-0.78-4.4-2.76c-0.45-1.98,0.78-3.95,2.76-4.4c3.71-0.86,6.97-2.04,9.72-3.58 c2.63-1.47,4.78-3.26,6.39-5.41c2.5-3.33,3.73-8.04,3.78-12.87c0.06-5.07-1.18-10.16-3.59-13.86c-0.69-1.06-1.45-2.03-2.25-2.89 c-3.61-3.89-8.19-5.59-12.95-5.62c-3.46-0.02-7.02,0.81-10.41,2.31c-0.75,0.37-1.5,0.77-2.25,1.21c-2.25,1.32-4.47,2.93-6.74,4.78 l-4.84-5.54c1.67-1.55,3.48-2.96,5.4-4.21c1.53-1,3.13-1.88,4.77-2.65c0.66-0.33,1.33-0.64,2-0.93c-3.19-5.65-7.78-9.7-12.98-12.2 c-5.2-2.49-11.02-3.45-16.69-2.9c-5.63,0.54-11.1,2.59-15.62,6.1c-5.23,4.06-9.2,10.11-10.73,18.14l-0.48,2.51l-2.5,0.44 c-2.45,0.43-4.64,1.02-6.56,1.77c-1.86,0.72-3.52,1.61-4.97,2.66c-1.16,0.84-2.16,1.78-3.01,2.8c-2.63,3.15-3.85,7.1-3.82,11.1 c0.03,4.06,1.35,8.16,3.79,11.53c0.91,1.25,1.96,2.4,3.16,3.4c1.22,1.01,2.59,1.84,4.13,2.48C20.03,71.08,21.84,71.55,23.84,71.8 L23.84,71.8z M39.91,53.78c0.41-2.14,2.47-3.54,4.61-3.13c2.14,0.41,3.54,2.47,3.13,4.61l-1.35,6.99 c-0.41,2.14-2.47,3.54-4.61,3.13c-2.14-0.41-3.54-2.47-3.13-4.61L39.91,53.78L39.91,53.78z M60.78,57.39 c0.41-2.14,2.47-3.54,4.61-3.13c2.14,0.41,3.54,2.47,3.13,4.61l-1.35,6.99c-0.41,2.14-2.47,3.54-4.61,3.13 c-2.14-0.41-3.54-2.47-3.13-4.61L60.78,57.39L60.78,57.39z M80.7,62.92c0.41-2.14,2.47-3.54,4.61-3.13 c2.14,0.41,3.54,2.47,3.13,4.61l-1.35,6.99c-0.41,2.14-2.47,3.54-4.61,3.13c-2.14-0.41-3.54-2.47-3.13-4.61L80.7,62.92L80.7,62.92z M75.32,84.99c0.41-2.14,2.47-3.54,4.61-3.13c2.14,0.41,3.54,2.47,3.13,4.61l-1.35,6.99C81.3,95.6,79.24,97,77.1,96.59 c-2.14-0.41-3.54-2.47-3.13-4.61L75.32,84.99L75.32,84.99z M54.82,80.26c0.41-2.14,2.47-3.54,4.61-3.13 c2.14,0.41,3.54,2.47,3.13,4.61l-1.35,6.99c-0.41,2.14-2.47,3.54-4.61,3.13c-2.14-0.41-3.54-2.47-3.13-4.61L54.82,80.26 L54.82,80.26z M35.22,75.53c0.41-2.14,2.47-3.54,4.61-3.13c2.14,0.41,3.54,2.47,3.13,4.61L41.61,84c-0.41,2.14-2.47,3.54-4.61,3.13 c-2.14-0.41-3.54-2.47-3.13-4.61L35.22,75.53L35.22,75.53z M59.1,102.46c0.41-2.14,2.47-3.54,4.61-3.13 c2.14,0.41,3.54,2.47,3.13,4.61l-1.35,6.99c-0.41,2.14-2.47,3.54-4.61,3.13c-2.14-0.41-3.54-2.47-3.13-4.61L59.1,102.46 L59.1,102.46z"/></g></svg>
            `;
    
            changeCloud(cloud)
        } else if (data.weather[0].main === 'Drizzle') {
            const cloud = `
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 110.55" style="enable-background:new 0 0 122.88 110.55" xml:space="preserve"><g><path d="M30.21,98.01c0.31-1.63,1.89-2.71,3.53-2.39c1.63,0.31,2.71,1.89,2.39,3.53l-1.03,5.34c-0.31,1.63-1.89,2.71-3.53,2.39 c-1.63-0.31-2.71-1.89-2.39-3.53L30.21,98.01L30.21,98.01z M18.23,78.18c1.54,0.19,2.63,1.6,2.43,3.14 c-0.19,1.54-1.6,2.63-3.14,2.43c-2.04-0.26-3.9-0.74-5.57-1.43c-1.72-0.71-3.26-1.64-4.62-2.78H7.32 c-1.28-1.07-2.41-2.29-3.36-3.61C1.41,72.41,0.03,68.11,0,63.83c-0.03-4.33,1.32-8.64,4.22-12.12c0.94-1.13,2.05-2.17,3.32-3.09 c1.48-1.07,3.17-1.98,5.07-2.72c1.32-0.51,2.72-0.94,4.21-1.28c1.68-6.68,5.27-11.83,9.88-15.41c4.31-3.34,9.51-5.29,14.85-5.81 c5.32-0.51,10.8,0.39,15.71,2.75c1.55,0.74,3.04,1.63,4.45,2.66c1.7-2.07,3.79-3.82,6.17-5.12c2.98-1.63,6.38-2.55,9.99-2.55 c5.76,0,10.97,2.33,14.75,6.11c3.77,3.77,6.11,8.99,6.11,14.75c0,2.54-0.46,4.97-1.29,7.23c-0.87,2.34-2.14,4.49-3.74,6.34 c-0.08,0.09-0.16,0.17-0.25,0.25c0.37,1.87,0.55,3.8,0.53,5.72c-0.05,4.82-1.36,9.63-4.01,13.16c-1.73,2.31-3.96,4.18-6.63,5.68 c-2.57,1.44-5.57,2.53-8.93,3.31c-1.51,0.35-3.02-0.6-3.37-2.11c-0.35-1.51,0.6-3.02,2.11-3.37c2.84-0.66,5.33-1.56,7.44-2.74 c2.01-1.13,3.65-2.5,4.89-4.14c1.91-2.54,2.85-6.15,2.89-9.84c0.04-3.88-0.9-7.77-2.74-10.6c-0.53-0.81-1.11-1.55-1.72-2.21 c-2.76-2.97-6.27-4.27-9.9-4.3c-2.64-0.02-5.37,0.62-7.96,1.76c-0.58,0.28-1.15,0.59-1.72,0.93c-1.72,1.01-3.42,2.24-5.15,3.66 l-3.7-4.24c1.28-1.18,2.66-2.27,4.13-3.22c1.17-0.76,2.39-1.44,3.65-2.02c0.5-0.25,1.02-0.49,1.53-0.71 c-2.44-4.32-5.95-7.42-9.93-9.33c-3.98-1.91-8.43-2.64-12.76-2.22c-4.31,0.42-8.49,1.98-11.95,4.66c-4,3.1-7.04,7.73-8.2,13.87 l-0.36,1.92l-1.91,0.34c-1.87,0.33-3.55,0.78-5.02,1.35c-1.42,0.55-2.69,1.23-3.8,2.03c-0.89,0.64-1.65,1.36-2.3,2.14 c-2.01,2.41-2.95,5.43-2.92,8.49c0.02,3.1,1.03,6.24,2.9,8.82c0.69,0.96,1.5,1.83,2.42,2.6l0,0.01c0.92,0.77,1.97,1.4,3.16,1.89 C15.32,77.63,16.7,77.99,18.23,78.18L18.23,78.18z M65.9,32.58c1.71,1.88,3.21,4.04,4.45,6.49c1.22-0.19,2.45-0.29,3.66-0.28 c5.14,0.03,10.09,1.87,14,6.08c0.82,0.88,1.59,1.87,2.31,2.98c0.31,0.48,0.61,0.98,0.88,1.5c0.36-0.66,0.68-1.34,0.94-2.06 c0.61-1.64,0.94-3.43,0.94-5.3c0-4.2-1.7-8.01-4.46-10.76c-2.75-2.75-6.56-4.46-10.76-4.46c-2.66,0-5.15,0.67-7.3,1.85 C68.76,29.62,67.18,30.97,65.9,32.58L65.9,32.58z M51.38,14.53c-0.99-0.97-1-2.56-0.03-3.55c0.97-0.99,2.56-1,3.55-0.03l6.91,6.82 c0.99,0.97,1,2.56,0.03,3.55c-0.97,0.99-2.56,1-3.55,0.03L51.38,14.53L51.38,14.53z M78.54,2.52c-0.01-1.38,1.11-2.51,2.5-2.52 c1.38-0.01,2.51,1.11,2.52,2.5l0.06,9.71c0.01,1.38-1.11,2.51-2.5,2.52c-1.38,0.01-2.51-1.11-2.52-2.5L78.54,2.52L78.54,2.52z M106.52,12.04c0.99-0.97,2.58-0.96,3.55,0.03c0.97,0.99,0.96,2.58-0.03,3.55l-6.91,6.82c-0.99,0.97-2.58,0.96-3.55-0.03 c-0.97-0.99-0.96-2.58,0.03-3.55L106.52,12.04L106.52,12.04z M120.36,38.66c1.38-0.01,2.51,1.11,2.52,2.5 c0.01,1.38-1.11,2.51-2.5,2.51l-9.71,0.06c-1.38,0.01-2.51-1.11-2.52-2.5c-0.01-1.38,1.11-2.51,2.5-2.52L120.36,38.66L120.36,38.66 z M101.8,57.81c-0.99-0.97-1-2.56-0.03-3.55c0.97-0.99,2.56-1,3.55-0.03l6.91,6.82c0.99,0.97,1,2.56,0.03,3.55 c-0.97,0.99-2.56,1-3.55,0.03L101.8,57.81L101.8,57.81z M30.52,64.4c0.31-1.63,1.89-2.71,3.53-2.39c1.63,0.31,2.71,1.89,2.39,3.53 l-1.03,5.34c-0.31,1.63-1.89,2.71-3.52,2.39c-1.63-0.31-2.71-1.89-2.39-3.53L30.52,64.4L30.52,64.4z M46.48,67.16 c0.31-1.63,1.89-2.71,3.53-2.39c1.63,0.31,2.71,1.89,2.39,3.53l-1.03,5.34c-0.31,1.63-1.89,2.71-3.53,2.39 c-1.63-0.31-2.71-1.89-2.39-3.53L46.48,67.16L46.48,67.16z M61.71,71.39c0.31-1.63,1.89-2.71,3.53-2.39 c1.63,0.31,2.71,1.89,2.39,3.53l-1.03,5.34c-0.31,1.63-1.89,2.71-3.53,2.39c-1.63-0.31-2.71-1.89-2.39-3.53L61.71,71.39 L61.71,71.39z M57.6,88.27c0.31-1.63,1.89-2.71,3.53-2.39s2.71,1.89,2.39,3.53l-1.03,5.34c-0.31,1.63-1.89,2.71-3.53,2.39 c-1.63-0.31-2.71-1.89-2.39-3.53L57.6,88.27L57.6,88.27z M41.92,84.65c0.31-1.63,1.89-2.71,3.53-2.39 c1.63,0.31,2.71,1.89,2.39,3.53l-1.03,5.34c-0.31,1.63-1.89,2.71-3.53,2.39c-1.63-0.31-2.71-1.89-2.39-3.53L41.92,84.65 L41.92,84.65z M26.93,81.04c0.31-1.63,1.89-2.71,3.52-2.39c1.63,0.31,2.71,1.89,2.39,3.53l-1.03,5.34 c-0.31,1.63-1.89,2.71-3.53,2.39s-2.71-1.89-2.39-3.53L26.93,81.04L26.93,81.04z M45.19,101.62c0.31-1.63,1.89-2.71,3.52-2.39 c1.63,0.31,2.71,1.89,2.39,3.53l-1.03,5.34c-0.31,1.63-1.89,2.71-3.53,2.39c-1.63-0.31-2.71-1.89-2.39-3.52L45.19,101.62 L45.19,101.62z"/></g></svg>
            `;
    
            changeCloud(cloud)
        } else if (data.weather[0].main === 'Mist') {
            const cloud = `
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 83.78" style="enable-background:new 0 0 122.88 83.78" xml:space="preserve"><g><path d="M101.8,57.81c-0.99-0.97-1-2.56-0.03-3.55c0.97-0.99,2.56-1,3.55-0.03l6.91,6.82c0.99,0.97,1,2.56,0.03,3.55 c-0.97,0.99-2.56,1-3.55,0.03L101.8,57.81L101.8,57.81z M66.03,46.16c-0.58,0.28-1.15,0.59-1.73,0.93 c-1.72,1.01-3.42,2.24-5.15,3.66l-3.7-4.24c1.28-1.19,2.66-2.27,4.13-3.22c1.17-0.76,2.39-1.44,3.65-2.02 c0.5-0.25,1.02-0.49,1.53-0.71c-2.44-4.32-5.95-7.42-9.93-9.33c-3.98-1.91-8.43-2.64-12.76-2.22c-4.31,0.42-8.49,1.98-11.95,4.66 c-4,3.1-7.04,7.73-8.2,13.87l-0.36,1.92l-1.91,0.34c-1.87,0.33-3.55,0.78-5.02,1.35c-1.42,0.55-2.69,1.23-3.8,2.03 c-0.89,0.64-1.65,1.36-2.3,2.14c-2.01,2.41-2.95,5.43-2.92,8.49c0.02,3.1,1.03,6.24,2.9,8.82c0.69,0.96,1.5,1.83,2.42,2.6l0,0.01 c0.92,0.77,1.97,1.4,3.16,1.89c1.17,0.48,2.46,0.83,3.9,1.03h55.48c2.7-0.65,5.09-1.53,7.11-2.66c2.01-1.13,3.65-2.5,4.89-4.14 c1.91-2.54,2.85-6.15,2.89-9.84c0.04-3.88-0.9-7.77-2.74-10.6c-0.53-0.81-1.11-1.55-1.72-2.21c-2.76-2.97-6.27-4.27-9.9-4.3 C71.35,44.38,68.62,45.02,66.03,46.16L66.03,46.16z M70.35,39.07c1.22-0.19,2.45-0.29,3.66-0.28c5.14,0.03,10.09,1.87,14,6.08 c0.82,0.88,1.59,1.87,2.31,2.98c0.31,0.48,0.61,0.98,0.88,1.51c0.36-0.66,0.68-1.34,0.94-2.06c0.61-1.64,0.94-3.43,0.94-5.3 c0-4.2-1.7-8.01-4.46-10.76c-2.75-2.75-6.56-4.46-10.76-4.46c-2.66,0-5.15,0.67-7.3,1.85c-1.8,0.99-3.39,2.33-4.66,3.95 C67.61,34.45,69.12,36.62,70.35,39.07L70.35,39.07z M93.44,55.83c0.37,1.87,0.55,3.8,0.53,5.72c-0.05,4.82-1.36,9.63-4.01,13.16 c-1.73,2.31-3.96,4.18-6.63,5.68c-2.57,1.44-5.57,2.53-8.93,3.31l-0.63,0.08H17.88l-0.35-0.03c-2.04-0.26-3.9-0.74-5.57-1.43 c-1.72-0.71-3.26-1.64-4.62-2.78H7.32c-1.28-1.07-2.41-2.29-3.36-3.61C1.41,72.41,0.03,68.11,0,63.83 c-0.03-4.33,1.32-8.64,4.22-12.12c0.94-1.13,2.05-2.17,3.32-3.09c1.48-1.07,3.17-1.98,5.07-2.72c1.32-0.51,2.72-0.94,4.21-1.28 c1.68-6.68,5.27-11.83,9.88-15.41c4.31-3.34,9.51-5.29,14.85-5.81c5.32-0.51,10.8,0.39,15.71,2.75c1.55,0.74,3.04,1.63,4.45,2.66 c1.7-2.07,3.79-3.82,6.17-5.12c2.98-1.63,6.38-2.55,9.99-2.55c5.76,0,10.97,2.33,14.75,6.11c3.77,3.77,6.11,8.99,6.11,14.75 c0,2.54-0.46,4.97-1.29,7.23c-0.87,2.34-2.14,4.49-3.74,6.34C93.61,55.67,93.53,55.75,93.44,55.83L93.44,55.83z M51.38,14.53 c-0.99-0.97-1-2.56-0.03-3.55c0.97-0.99,2.56-1,3.55-0.03l6.91,6.82c0.99,0.97,1,2.56,0.03,3.55c-0.97,0.99-2.56,1-3.55,0.03 L51.38,14.53L51.38,14.53z M78.54,2.52c-0.01-1.38,1.11-2.51,2.5-2.52c1.38-0.01,2.51,1.11,2.52,2.5l0.06,9.71 c0.01,1.38-1.11,2.51-2.5,2.52c-1.38,0.01-2.51-1.11-2.52-2.5L78.54,2.52L78.54,2.52z M106.52,12.04c0.99-0.97,2.58-0.96,3.55,0.03 c0.97,0.99,0.96,2.58-0.03,3.55l-6.91,6.82c-0.99,0.97-2.58,0.96-3.55-0.03c-0.97-0.99-0.96-2.58,0.03-3.55L106.52,12.04 L106.52,12.04z M120.36,38.66c1.38-0.01,2.51,1.11,2.52,2.5c0.01,1.38-1.11,2.51-2.5,2.52l-9.71,0.06 c-1.38,0.01-2.51-1.11-2.52-2.5c-0.01-1.38,1.11-2.51,2.5-2.52L120.36,38.66L120.36,38.66z"/></g></svg>
            `;
    
            changeCloud(cloud)
        }
    
        document.getElementById('temp')
            .textContent = `${Math.round(data.main.temp)} °c`;
    
        document.getElementById('city')
            .textContent = data.name;
    
        document.querySelector('.humidity')
            .textContent = `${data.main.humidity} %`;
    
        document.querySelector('.speed')
            .textContent = `${data.wind.speed} km/h`
    })
    
    function changeCloud(param) {
        document.querySelector('.weather-status')
            .innerHTML = param;
    }
}

const searchButton = document.querySelector('.input-search-icon-container');

searchButton.addEventListener('click', () => {
    getData();
})

function getData() {
    const inputElement = document.querySelector('.text-box');

    if (inputElement.value <= 0) {
        callData('lagos')
    } else {
        callData(inputElement.value)
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getData()
    }
})

document.addEventListener('click', (event) => {
    const inputElement = document.querySelector('.text-box');

    if (event.target !== inputElement) {
        document.body.focus()
    }
})