$(document).ready(function () {
        $("form").submit(schedule);

        function schedule(event) {
            event.preventDefault();

            var day = $("input[name=dayOfWeek]:checked").val();

            switch (day) {
                case "monday":
                    $("#event1").text("Eat breakfast, 8:30 PM - 9:00 PM");
                    $("#event2").text("JavaScript class, 6:00 PM - 9:50 PM");
                    break;
                case "tuesday":
                    $("#event1").text("Eat breakfast, 8:30 PM - 9:00 PM");
                    $("#event2").text("No school! Have fun, all day");
                    break;
                case "wednesday":
                    $("#event1").text("Intro to SQL class, 12:00 PM - 3:50 PM");
                    $("#event2").text("JavaScript class, 6:00 PM - 9:50 PM ");
                    break;
                case "thursday":
                    $("#event1").text("Go for a walk, 1:00 PM - 2:00 PM");
                    $("#event2").text("Math class, 6:00 PM - 8:50 PM");
                    break;
                case "friday":
                    $("#event1").text("Eat breakfast, 8:30 PM - 9:00 PM");
                    $("#event2").text("No school! Play video games, 9:00 PM - 11:00 PM");
                    break;
                case "saturday":
                    $("#event1").text("Eat breakfast, 8:30 PM - 9:00 PM");
                    $("#event2").text("Clean room, 2:00 PM - 2:45 PM");
                    break;
                case "sunday":
                    $("#event1").text("Eat breakfast, 8:30 PM - 9:00 PM");
                    $("#event2").text("Do homework, 2:00 PM - 5:00 PM");
                    break;
                default:
                    $("#event1").text("Eat breakfast, 8:30 PM - 9:00 PM");
                    $("#event2").text("JavaScript class, 6:00 PM - 9:50 PM");
                    break;
            }
        }
});