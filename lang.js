$(function() {
    var defaultLang = "es";
    var languages = {
        "es": {
            PRICING: '499 MXN',

            // Menu principal
            LOGIN: 'Iniciar Sesión',
            SIGNUP: 'Registrarme',
            PRICES: 'Precios',

            //Secciones en página principal
            SECTION_1_TITLE_0: 'Convierte tus visitas web en',
            SECTION_1_DATA_STRING_0: 'prospectos',
            SECTION_1_DATA_STRING_1: 'clientes',
            SECTION_1_TITLE_1: 'Atiende a los visitantes de tu sitio web. Dales la información que ellos necesitan ... mejora la atención a clientes.',
            ENJOY_FREE_MONTH_BTN: 'Disfruta 1 mes Gratis',
            SECTION_2_TITLE: 'Estar allí - Ser útil - Ser rápido',
            SECTION_2_SUBTITLE_0: 'Son las acciones de tu empresa que ayudarán a los',
            SECTION_2_SUBTITLE_1: 'antes de su decisión de compra',
            SECTION_2_DATA_STRING_0: 'visitantes',
            SECTION_2_DATA_STRING_1: 'prospectos',
            SECTION_2_DATA_STRING_2: 'clientes',
            SECTION_3_TITLE: 'Regístrate ahora - es rápido (y fácil)',
            SECTION_3_SUBTITLE: '¡Convierte tus visitas web en clientes hoy!',

            // Formulario de registro
            REGISTRATION_FORM: 'Formulario de Registro',
            EMAIL: 'Correo electrónico',
            PASSWORD: 'Contraseña',
            PASSWORD_REPEAT: 'Repetir contraseña',
            ACCEPT_BTN: 'Aceptar',
            VERIFY_PASS_ERROR: 'Las contraseñas ingresadas no coinciden',
            PASS_LENGTH_ERROR: 'La contraseña debe contener al menos 8 caracteres',
            REQUIRED_FIELD: 'Campo requerido.',
            NO_VALID_FIELD: 'El valor ingresado no es válido.',

            // Formulario de datos de pago
            BILLING_ADDRESS: 'Dirección de Facturación',
            FULL_NAME: 'Nombre Completo',
            ADDRESS1: 'Dirección 1',
            ADDRESS2: 'Direccion 2',
            CITY: 'Ciudad',
            STATE: 'Estado',
            ZIP_CODE: 'Código Postal',
            CREDIT_CARD_INFO: 'Información de Tarjeta de Crédito',
            NAME_ON_CARD: 'Titular de la tarjeta',
            CARD_NUMBER: 'Número de Tarjeta',
            EXP_MONTH: 'Mes Exp.',
            EXP_YEAR: 'Año Exp.',
            ORDER_TOTAL: 'Importe',
            PLACE_ORDER: 'Aceptar',

            //Footer
            QUERY: 'Consulta',
            NOTICE_OF_PRIVACY: 'Aviso de privacidad',
            COMPANY_POLICIES: 'Políticas de la Empresa',
            FAQ: 'Preguntas Frecuentes',
            RIGHTS: '© 2017 Chat Manager. Todos los derechos reservados.'
        },

        "en": {
            PRICING: '25 U$S',

            // Main principal
            LOGIN: 'Login',
            SIGNUP: 'Sign Up',
            PRICES: 'Prices',

            //Main page sections
            SECTION_1_TITLE_0: 'Turn your visits to en',
            SECTION_1_DATA_STRING_0: 'prospects',
            SECTION_1_DATA_STRING_1: 'customers',
            SECTION_1_TITLE_1: 'Serves visitors to your website. Give them the information they need. Improve customer service.',
            ENJOY_FREE_MONTH_BTN: 'Enjoy a free month',
            SECTION_2_TITLE: 'Be there - Be usefull - Be quick',
            SECTION_2_SUBTITLE_0: 'It is the actions of your company that will help the',
            SECTION_2_SUBTITLE_1: 'before their purchasing decision',
            SECTION_2_DATA_STRING_0: 'visitors',
            SECTION_2_DATA_STRING_1: 'prospects',
            SECTION_2_DATA_STRING_2: 'customers',
            SECTION_3_TITLE: 'Sign up now - is quick (and easy)',
            SECTION_3_SUBTITLE: '¡Turn your visitors to customers TODAY!',

            // Registration form
            REGISTRATION_FORM: 'Registration Form',
            EMAIL: 'Email',
            PASSWORD: 'Password',
            PASSWORD_REPEAT: 'Password Verify',
            ACCEPT_BTN: 'Accept',
            VERIFY_PASS_ERROR: 'Passwords do not match',
            PASS_LENGTH_ERROR: 'Password must contain at least 8 characters',
            REQUIRED_FIELD: 'Required field',
            NO_VALID_FIELD: 'The field content is not valid',

            // Customers payment data
            BILLING_ADDRESS: 'Billing Address',
            FULL_NAME: 'Full Name',
            ADDRESS1: 'Address 1',
            ADDRESS2: 'Address 2',
            CITY: 'City',
            STATE: 'State',
            ZIP_CODE: 'Zip Code',
            CREDIT_CARD_INFO: 'Credit Card Info',
            CARD_NUMBER: 'Card Number',
            NAME_ON_CARD: 'Name on Card',
            EXP_MONTH: 'Exp. Month',
            EXP_YEAR: 'Exp. Year',
            ORDER_TOTAL: 'Order Total',
            PLACE_ORDER: 'Place Order',

            //Footer
            QUERY: 'Query',
            NOTICE_OF_PRIVACY: 'Notice of Privacy',
            COMPANY_POLICIES: 'Company Policies',
            FAQ: 'FAQ',
            RIGHTS: '© 2017 Chat Manager. All rights reserved.'
        }
    };

    translate(defaultLang);

    function translate(lang) {
        $('[data-translate]').each(function() {
            $(this).text(languages[lang][$(this).data('translate')]);
        });
    }

    $('.lang').click(function(e) {
        e.preventDefault();
        var lang = $(this).data('lang');
        translate(lang);
    });
});
