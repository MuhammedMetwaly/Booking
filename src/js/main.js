$(document).ready(function () {
  $(".btn_repeat").click(function (e) {
    e.preventDefault();

    const parent = $(this).prev($(".repeater_wrapper"));
    const clonedEl = parent.find("[class*=col]:first").clone();
    clonedEl.find("input").val("");
    parent.append(clonedEl);
  });

  $("body").on("click", ".remove_reapter", function (e) {
    $(this).closest("[class*=col]").remove();
  });

  $(".checkbox_block input").change(function () {
    $(".checkbox_block").removeClass("active");
    if ($(this).prop("checked") == true) {
      $(this).parents(".checkbox_block").addClass("active");
    }
  });

  $(".checkbox_block input:checked")
    .parents(".checkbox_block")
    .addClass("active");

  $(".scrollTo").click(function () {
    $("body, html").animate(
      {
        scrollTop: $(document).height() - $(window).height(),
      },
      500
    );
  });
  // modal action for details page
  $(".freezeBtn").click(function () {
    const id = $(this).data("id");
    const statement = $(this).data("statement");
    window.scrollTo({ top: 0, behavior: "smooth" });
    $("#freeze-form").removeClass("d-none");
    $("#freeze-form [name=period]").val("").focus();
    $("#freeze-form #action-statement").html(statement);
    $("#freeze-form input[type=hidden]").val(id);
    $("#freeze-form form").attr("action", action);
  });
});
