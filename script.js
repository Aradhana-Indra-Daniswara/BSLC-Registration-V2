$(function() {
  $('#Nindya').on("click", function(){
    // Selector
    $(this).addClass('selected');
    $('#Mentor, #Mentee').removeClass('selected');

    // Content
    $('.nindya').css("display", "flex");
    $('.mentor, .mentee').css("display", "none");
  })
  $('#Mentor').on("click", function(){
    // Selector
    $(this).addClass('selected');
    $('#Nindya, #Mentee').removeClass('selected');
    
    // Content
    $('.mentor').css("display", "flex");
    $('.nindya, .mentee').css("display", "none");
  })
  $('#Mentee').on("click", function(){
    // Selector
    $(this).addClass('selected');
    $('#Nindya, #Mentor').removeClass('selected');

    $('.mentee').css("display", "flex");
    $('.nindya, .mentor').css("display", "none");
  })
});

function goToMainWebsite(){
  location.href = 'https://new.bslc.or.id/';
}