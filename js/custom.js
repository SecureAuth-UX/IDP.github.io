$(document).ready(function () {
    $(window).load(function () {
        //ACTIVE MENU
        var menu = $(location).attr('href');

        if (menu.includes('/policies.html')) {
            $('#policies').addClass('navActive');
        }
        else if (menu.includes('/new-policy.html')) {
            $('#policies').addClass('navActive');
        }
        else if (menu.includes('/edit-policy.html')) {
            $('#policies').addClass('navActive');
        }
        else if (menu.includes('/dashboard.html')) {
            $('#home').addClass('navActive');
        }
        else if (menu.includes('/multi-factor.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-fido.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-yubikey.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-auth-apps.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-text-message.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-email.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-voice-phone-call.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-security-questions.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-pin.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/mfa-symantec-vip.html')) {
            $('#mfa').addClass('navActive');
        }
        else if (menu.includes('/risk-providers.html')) {
            $('#risk').addClass('navActive');
        }
        else if (menu.includes('/new-risk-provider.html')) {
            $('#risk').addClass('navActive');
        }
        else if (menu.includes('/edit-risk-provider.html')) {
            $('#risk').addClass('navActive');
        }
        else if (menu.includes('/adaptive-logs-configuration.html')) {
            $('#ip').addClass('navActive');
        }
        else if (menu.includes('/datastores.html')) {
            $('#datastores').addClass('navActive');
        }
        else if (menu.includes('/new-datastore.html')) {
            $('#datastores').addClass('navActive');
        }
        else if (menu.includes('/edit-datastore.html')) {
            $('#datastores').addClass('navActive');
        }
        else if (menu.includes('/applications.html')) {
            $('#app').addClass('navActive');
        }
        else if (menu.includes('/new-application.html')) {
            $('#app').addClass('navActive');
        }
        else if (menu.includes('/edit-application.html')) {
            $('#app').addClass('navActive');
        }
        else if (menu.includes('/internal-application-manager.html')) {
            $('#customizedResources').addClass('navActive');
        }
        else if (menu.includes('/new-internal-application-manager.html')) {
            $('#customizedResources').addClass('navActive');
        }
        else if (menu.includes('/edit-internal-application-manager.html')) {
            $('#customizedResources').addClass('navActive');
        }
        else if (menu.includes('/portal-manager.html')) {
            $('#portal').addClass('navActive');
        }
        else if (menu.includes('/new-portal.html')) {
            $('#portal').addClass('navActive');
        }
        else if (menu.includes('/edit-portal.html')) {
            $('#portal').addClass('navActive');
        }
        else if (menu.includes('/oidc-manager.html')) {
            $('#oidc').addClass('navActive');
        }
        else if (menu.includes('/new-oidc-configuration.html')) {
            $('#oidc').addClass('navActive');
        }
        else if (menu.includes('/edit-oidc-configuration.html')) {
            $('#oidc').addClass('navActive');
        }
        else if (menu.includes('/clients.html')) {
            $('#oidc').addClass('navActive');
        }
        else if (menu.includes('/new-client.html')) {
            $('#oidc').addClass('navActive');
        }
        else if (menu.includes('/edit-client.html')) {
            $('#oidc').addClass('navActive');
        }
        else if (menu.includes('/user-tools.html')) {
            $('#userTools').addClass('navActive');
        }
        else if (menu.includes('/new-user-tool.html')) {
            $('#userTools').addClass('navActive');
        }
        else if (menu.includes('/edit-user-tool.html')) {
            $('#userTools').addClass('navActive');
        }
        else if (menu.includes('/system-settings.html')) {
            $('#systemSettings').addClass('navActive');
        }
        else if (menu.includes('/email-provider.html')) {
            $('.emailProvider').addClass('navActive');
        }
        else if (menu.includes('/email-templates.html')) {
            $('#emailTemplates').addClass('navActive');
        }
        else if (menu.includes('/whats-new.html')) {
            $('#news').addClass('navActive');
        }
        else if (menu.includes('/getting-started.html')) {
            $('#gettingStarted').addClass('navActive');
        }
        else if (menu.includes('/identity-store.html')) {
            $('#identityStore').addClass('navActive');
        }
    });

    //SEE GROUPS
    $('#groupsSwitch').each(function () {
        $(this).click(function () {
            $("#groupFields").toggleClass("groupFields-disabled");
        });
    });

    //SEE CERTIFICATE OIDC
    $('.radiobuttons input[type="radio"]').each(function () {
        $("#opt1").click(function () {
            $('#certificateField').show();
        });
        $("#opt2").click(function () {
            $('#certificateField').hide();
        });
    });

    //ACCORDION ARROW
    $('.accordion-head a').on('click', function () {
        if ($(this).attr('aria-expanded') == 'true') {
            $(this).find('span').html('<img src="images/chevron-right.svg" alt=""/>');
        } else {
            $(this).find('span').html('<img src="images/chevron-down.svg" alt=""/>');
        }
    });

    //DROPDOWN USER

    $('.chevron-top').css('display', 'none');
    $("#avatarName").click(function () {
        if ($('#submenu').hasClass('show')) {
            $('.avatar .profile .profile-picture').removeClass('imgSubmenu');
            $('.chevron-bottom').css('display', 'inline');
            $('.chevron-top').css('display', 'none');
        }
        else {
            $('.avatar .profile .profile-picture').addClass('imgSubmenu');
            $('.chevron-top').css('display', 'inline');
            $('.chevron-bottom').css('display', 'none');
        }
    });

    //COLLAPSE MENU
    var x = $(".sa-view-body").width();
    $(".buttons-footer").css("width", x);
    $('.collapseButton-expand').css('display', 'none');

    $("#collapseButton").click(function () {
        $('#header').toggleClass('menuIcons');

        if ($('#header').hasClass('menuIcons')) {
            $('.collapseButton-collapse').css('display', 'none');
            $('#submenu').removeClass('show');
            $('.collapseButton-expand').css('display', 'inline');
            $("#collapseButton").attr('style', 'left:85px; top:112px');
            $(".buttons-footer").css("width", x);
        }
        else {
            $('.collapseButton-collapse').css('display', 'inline');
            $('.collapseButton-expand').css('display', 'none');
            $("#collapseButton").attr('style', 'left:280px; top:112px');
            $(".buttons-footer").css("width", x);
        }
    });

    //EDIT TITLE AND DESCRIPTION

    $(".save-title").css("display", "none");
    $(".cancel-title").css("display", "none");

    $('#titleEditable').click(function () {
        $('#titleEditable').attr('contenteditable', 'true');
        $('#titleEditable').addClass('borderTitle');
        $(".edit-title").css("display", "none");
        $(".save-title").css("display", "inline-block");
        $(".cancel-title").css("display", "inline-block");
    });

    $('.edit-title').click(function () {
        $('#titleEditable').attr('contenteditable', 'true');
        $('#titleEditable').addClass('borderTitle');
        $(".edit-title").css("display", "none");
        $(".save-title").css("display", "inline-block");
        $(".cancel-title").css("display", "inline-block");
    });

    $('.save-title').click(function () {
        $('#titleEditable').attr('contenteditable', 'false');
        $('#titleEditable').removeClass('borderTitle');
        $(".edit-title").css("display", "inline-block");
        $(".save-title").css("display", "none");
        $(".cancel-title").css("display", "none");
    });

    $('.cancel-title').click(function () {
        $('#titleEditable').attr('contenteditable', 'false');
        $('#titleEditable').removeClass('borderTitle');
        $(".edit-title").css("display", "inline-block");
        $(".save-title").css("display", "none");
        $(".cancel-title").css("display", "none");
    });

    $(".save-description").css("display", "none");
    $(".cancel-description").css("display", "none");

    $('#descriptionEditable').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'true');
        $('#descriptionEditable').addClass('borderTitle');
        $(".edit-description").css("display", "none");
        $(".save-description").css("display", "inline-block");
        $(".cancel-description").css("display", "inline-block");
    });

    $('.edit-description').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'true');
        $('#descriptionEditable').addClass('borderTitle');
        $(".edit-description").css("display", "none");
        $(".save-description").css("display", "inline-block");
        $(".cancel-description").css("display", "inline-block");
    });

    $('.save-description').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'false');
        $('#descriptionEditable').removeClass('borderTitle');
        $(".edit-description").css("display", "inline-block");
        $(".save-description").css("display", "none");
        $(".cancel-description").css("display", "none");
    });

    $('.cancel-description').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'false');
        $('#descriptionEditable').removeClass('borderTitle');
        $(".edit-description").css("display", "inline-block");
        $(".save-description").css("display", "none");
        $(".cancel-description").css("display", "none");
    });

    //STEPPER
    var tabsCount = $(".step-steps li"),
        prevBtn = $("#prev"),
        nextBtn = $("#next");

    tabsCount.click(function () {
        if ($(".step-steps li:first-child").hasClass("active")) {
            $(".steper:first-child").addClass("step-active");
            $(".steper:nth-child(2)").removeClass("step-active");
            $(".steper:nth-child(3)").removeClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").removeClass("circle-active");
            $(".circle-step:nth-child(3)").removeClass("circle-active");
        }

        if ($(".step-steps li:nth-child(2)").hasClass("active")) {
            $(".steper:first-child").removeClass("step-active");
            $(".steper:nth-child(2)").addClass("step-active");
            $(".steper:nth-child(3)").removeClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").addClass("circle-active");
            $(".circle-step:nth-child(3)").removeClass("circle-active");
        }

        if ($(".step-steps li:nth-child(3)").hasClass("active")) {
            $(".steper:first-child").removeClass("step-active");
            $(".steper:nth-child(2)").removeClass("step-active");
            $(".steper:nth-child(3)").addClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").addClass("circle-active");
            $(".circle-step:nth-child(3)").addClass("circle-active");
        };
    })

    prevBtn.click(function () {
        if ($(".step-steps li:first-child").hasClass("active")) {
            $(".steper:first-child").addClass("step-active");
            $(".steper:nth-child(2)").removeClass("step-active");
            $(".steper:nth-child(3)").removeClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").removeClass("circle-active");
            $(".circle-step:nth-child(3)").removeClass("circle-active");
        }

        if ($(".step-steps li:nth-child(2)").hasClass("active")) {
            $(".steper:first-child").removeClass("step-active");
            $(".steper:nth-child(2)").addClass("step-active");
            $(".steper:nth-child(3)").removeClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").addClass("circle-active");
            $(".circle-step:nth-child(3)").removeClass("circle-active");
        }

        if ($(".step-steps li:nth-child(3)").hasClass("active")) {
            $(".steper:first-child").removeClass("step-active");
            $(".steper:nth-child(2)").removeClass("step-active");
            $(".steper:nth-child(3)").addClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").addClass("circle-active");
            $(".circle-step:nth-child(3)").addClass("circle-active");
        };
    });

    nextBtn.click(function () {
        if ($(".step-steps li:first-child").hasClass("active")) {
            $(".steper:first-child").addClass("step-active");
            $(".steper:nth-child(2)").removeClass("step-active");
            $(".steper:nth-child(3)").removeClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").removeClass("circle-active");
            $(".circle-step:nth-child(3)").removeClass("circle-active");
        }

        if ($(".step-steps li:nth-child(2)").hasClass("active")) {
            $(".steper:first-child").removeClass("step-active");
            $(".steper:nth-child(2)").addClass("step-active");
            $(".steper:nth-child(3)").removeClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").addClass("circle-active");
            $(".circle-step:nth-child(3)").removeClass("circle-active");
        }

        if ($(".step-steps li:nth-child(3)").hasClass("active")) {
            $(".steper:first-child").removeClass("step-active");
            $(".steper:nth-child(2)").removeClass("step-active");
            $(".steper:nth-child(3)").addClass("step-active");

            $(".circle-step:first-child").addClass("circle-active");
            $(".circle-step:nth-child(2)").addClass("circle-active");
            $(".circle-step:nth-child(3)").addClass("circle-active");
        };
    });

    //ACTIONS LIST

    $(".btnActions").each(function () {
        $('.actionsListOpen').hide();

        $(".btnActions").click(function () {
            var row = $(this).closest(".grid-actions").find('.actionsListOpen');
            $('.actionsListOpen').hide();
            $(row).show();
        });

        $(".closeActions").click(function () {
            var row = $(this).closest(".grid-actions").find('.actionsListOpen');
            $(row).hide();
        });
    });
});
