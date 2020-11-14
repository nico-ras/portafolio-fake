$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('.card-title').click(function () {
    $('.card-text').toggle("slow", function () {

    });
}); 