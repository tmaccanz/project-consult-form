/* Home Page Module*/

// Imports //

import $ from "jquery";

// Module Export //

export default function componentForm() {

    $(".form").submit(function(e) {

        e.preventDefault();
        let $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {

            alert("Thank you! Todd will be in touch shortly to clarify any details")
            $(".form__input").val("");
        });
    });

}

