$(function () {

    $("#rateYo").rateYo({
        starWidth: "40px",
        rating: 4.5,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M14.2441 1.21958C15.0021 -0.170307 16.9979 -0.170311 17.7559 1.21957L21.1529 7.44849C21.4406 7.97594 21.9501 8.34614 22.5406 8.45673L29.5144 9.76268C31.0705 10.0541 31.6872 11.9521 30.5996 13.1025L25.7253 18.2581C25.3126 18.6947 25.1179 19.2937 25.1952 19.8895L26.1082 26.9255C26.312 28.4955 24.6974 29.6686 23.2672 28.9897L16.8577 25.9471C16.3149 25.6895 15.6851 25.6895 15.1423 25.9471L8.7328 28.9897C7.30262 29.6686 5.68805 28.4955 5.89177 26.9256L6.80475 19.8895C6.88206 19.2937 6.68744 18.6947 6.27469 18.2581L1.40039 13.1025C0.312769 11.9521 0.929476 10.0541 2.48557 9.76268L9.45937 8.45673C10.0499 8.34614 10.5594 7.97594 10.8471 7.44849L14.2441 1.21958Z"/></svg>'
}).on("rateyo.change", function(e, data) {
        
    });

});