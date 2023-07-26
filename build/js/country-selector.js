document.addEventListener("DOMContentLoaded", function () {
  const countriesArray = [
    { name: "Afghanistan", flag: "🇦🇫", code: "AF", dial_code: "+93" },
    { name: "Åland Islands", flag: "🇦🇽", code: "AX", dial_code: "+358" },
    { name: "Albania", flag: "🇦🇱", code: "AL", dial_code: "+355" },
    { name: "Algeria", flag: "🇩🇿", code: "DZ", dial_code: "+213" },
    { name: "American Samoa", flag: "🇦🇸", code: "AS", dial_code: "+1684" },
    { name: "Andorra", flag: "🇦🇩", code: "AD", dial_code: "+376" },
    { name: "Angola", flag: "🇦🇴", code: "AO", dial_code: "+244" },
    { name: "Anguilla", flag: "🇦🇮", code: "AI", dial_code: "+1264" },
    { name: "Antarctica", flag: "🇦🇶", code: "AQ", dial_code: "+672" },
    { name: "Antigua and Barbuda", flag: "🇦🇬", code: "AG", dial_code: "+1268" },
    { name: "Argentina", flag: "🇦🇷", code: "AR", dial_code: "+54" },
    { name: "Armenia", flag: "🇦🇲", code: "AM", dial_code: "+374" },
    { name: "Aruba", flag: "🇦🇼", code: "AW", dial_code: "+297" },
    { name: "Australia", flag: "🇦🇺", code: "AU", dial_code: "+61" },
    { name: "Austria", flag: "🇦🇹", code: "AT", dial_code: "+43" },
    { name: "Azerbaijan", flag: "🇦🇿", code: "AZ", dial_code: "+994" },
    { name: "Bahamas", flag: "🇧🇸", code: "BS", dial_code: "+1242" },
    { name: "Bahrain", flag: "🇧🇭", code: "BH", dial_code: "+973" },
    { name: "Bangladesh", flag: "🇧🇩", code: "BD", dial_code: "+880" },
    { name: "Barbados", flag: "🇧🇧", code: "BB", dial_code: "+1246" },
    { name: "Belarus", flag: "🇧🇾", code: "BY", dial_code: "+375" },
    { name: "Belgium", flag: "🇧🇪", code: "BE", dial_code: "+32" },
    { name: "Belize", flag: "🇧🇿", code: "BZ", dial_code: "+501" },
    { name: "Benin", flag: "🇧🇯", code: "BJ", dial_code: "+229" },
    { name: "Bermuda", flag: "🇧🇲", code: "BM", dial_code: "+1441" },
    { name: "Bhutan", flag: "🇧🇹", code: "BT", dial_code: "+975" },
    {
      name: "Bolivia, Plurinational State of bolivia",
      flag: "🇧🇴",
      code: "BO",
      dial_code: "+591",
    },
    {
      name: "Bosnia and Herzegovina",
      flag: "🇧🇦",
      code: "BA",
      dial_code: "+387",
    },
    { name: "Botswana", flag: "🇧🇼", code: "BW", dial_code: "+267" },
    { name: "Bouvet Island", flag: "🇧🇻", code: "BV", dial_code: "+47" },
    { name: "Brazil", flag: "🇧🇷", code: "BR", dial_code: "+55" },
    {
      name: "British Indian Ocean Territory",
      flag: "🇮🇴",
      code: "IO",
      dial_code: "+246",
    },
    { name: "Brunei Darussalam", flag: "🇧🇳", code: "BN", dial_code: "+673" },
    { name: "Bulgaria", flag: "🇧🇬", code: "BG", dial_code: "+359" },
    { name: "Burkina Faso", flag: "🇧🇫", code: "BF", dial_code: "+226" },
    { name: "Burundi", flag: "🇧🇮", code: "BI", dial_code: "+257" },
    { name: "Cambodia", flag: "🇰🇭", code: "KH", dial_code: "+855" },
    { name: "Cameroon", flag: "🇨🇲", code: "CM", dial_code: "+237" },
    { name: "Canada", flag: "🇨🇦", code: "CA", dial_code: "+1" },
    { name: "Cape Verde", flag: "🇨🇻", code: "CV", dial_code: "+238" },
    { name: "Cayman Islands", flag: "🇰🇾", code: "KY", dial_code: "+345" },
    {
      name: "Central African Republic",
      flag: "🇨🇫",
      code: "CF",
      dial_code: "+236",
    },
    { name: "Chad", flag: "🇹🇩", code: "TD", dial_code: "+235" },
    { name: "Chile", flag: "🇨🇱", code: "CL", dial_code: "+56" },
    { name: "China", flag: "🇨🇳", code: "CN", dial_code: "+86" },
    { name: "Christmas Island", flag: "🇨🇽", code: "CX", dial_code: "+61" },
    {
      name: "Cocos (Keeling) Islands",
      flag: "🇨🇨",
      code: "CC",
      dial_code: "+61",
    },
    { name: "Colombia", flag: "🇨🇴", code: "CO", dial_code: "+57" },
    { name: "Comoros", flag: "🇰🇲", code: "KM", dial_code: "+269" },
    { name: "Congo", flag: "🇨🇬", code: "CG", dial_code: "+242" },
    {
      name: "Congo, The Democratic Republic of the Congo",
      flag: "🇨🇩",
      code: "CD",
      dial_code: "+243",
    },
    { name: "Cook Islands", flag: "🇨🇰", code: "CK", dial_code: "+682" },
    { name: "Costa Rica", flag: "🇨🇷", code: "CR", dial_code: "+506" },
    { name: "Cote d'Ivoire", flag: "🇨🇮", code: "CI", dial_code: "+225" },
    { name: "Croatia", flag: "🇭🇷", code: "HR", dial_code: "+385" },
    { name: "Cuba", flag: "🇨🇺", code: "CU", dial_code: "+53" },
    { name: "Cyprus", flag: "🇨🇾", code: "CY", dial_code: "+357" },
    { name: "Czech Republic", flag: "🇨🇿", code: "CZ", dial_code: "+420" },
    { name: "Denmark", flag: "🇩🇰", code: "DK", dial_code: "+45" },
    { name: "Djibouti", flag: "🇩🇯", code: "DJ", dial_code: "+253" },
    { name: "Dominica", flag: "🇩🇲", code: "DM", dial_code: "+1767" },
    { name: "Dominican Republic", flag: "🇩🇴", code: "DO", dial_code: "+1849" },
    { name: "Ecuador", flag: "🇪🇨", code: "EC", dial_code: "+593" },
    { name: "Egypt", flag: "🇪🇬", code: "EG", dial_code: "+20" },
    { name: "El Salvador", flag: "🇸🇻", code: "SV", dial_code: "+503" },
    { name: "Equatorial Guinea", flag: "🇬🇶", code: "GQ", dial_code: "+240" },
    { name: "Eritrea", flag: "🇪🇷", code: "ER", dial_code: "+291" },
    { name: "Estonia", flag: "🇪🇪", code: "EE", dial_code: "+372" },
    { name: "Ethiopia", flag: "🇪🇹", code: "ET", dial_code: "+251" },
    {
      name: "Falkland Islands (Malvinas)",
      flag: "🇫🇰",
      code: "FK",
      dial_code: "+500",
    },
    { name: "Faroe Islands", flag: "🇫🇴", code: "FO", dial_code: "+298" },
    { name: "Fiji", flag: "🇫🇯", code: "FJ", dial_code: "+679" },
    { name: "Finland", flag: "🇫🇮", code: "FI", dial_code: "+358" },
    { name: "France", flag: "🇫🇷", code: "FR", dial_code: "+33" },
    { name: "French Guiana", flag: "🇬🇫", code: "GF", dial_code: "+594" },
    { name: "French Polynesia", flag: "🇵🇫", code: "PF", dial_code: "+689" },
    {
      name: "French Southern Territories",
      flag: "🇹🇫",
      code: "TF",
      dial_code: "+262",
    },
    { name: "Gabon", flag: "🇬🇦", code: "GA", dial_code: "+241" },
    { name: "Gambia", flag: "🇬🇲", code: "GM", dial_code: "+220" },
    { name: "Georgia", flag: "🇬🇪", code: "GE", dial_code: "+995" },
    { name: "Germany", flag: "🇩🇪", code: "DE", dial_code: "+49" },
    { name: "Ghana", flag: "🇬🇭", code: "GH", dial_code: "+233" },
    { name: "Gibraltar", flag: "🇬🇮", code: "GI", dial_code: "+350" },
    { name: "Greece", flag: "🇬🇷", code: "GR", dial_code: "+30" },
    { name: "Greenland", flag: "🇬🇱", code: "GL", dial_code: "+299" },
    { name: "Grenada", flag: "🇬🇩", code: "GD", dial_code: "+1473" },
    { name: "Guadeloupe", flag: "🇬🇵", code: "GP", dial_code: "+590" },
    { name: "Guam", flag: "🇬🇺", code: "GU", dial_code: "+1671" },
    { name: "Guatemala", flag: "🇬🇹", code: "GT", dial_code: "+502" },
    { name: "Guernsey", flag: "🇬🇬", code: "GG", dial_code: "+44" },
    { name: "Guinea", flag: "🇬🇳", code: "GN", dial_code: "+224" },
    { name: "Guinea-Bissau", flag: "🇬🇼", code: "GW", dial_code: "+245" },
    { name: "Guyana", flag: "🇬🇾", code: "GY", dial_code: "+592" },
    { name: "Haiti", flag: "🇭🇹", code: "HT", dial_code: "+509" },
    {
      name: "Heard Island and Mcdonald Islands",
      flag: "🇭🇲",
      code: "HM",
      dial_code: "+672",
    },
    {
      name: "Holy See (Vatican City State)",
      flag: "🇻🇦",
      code: "VA",
      dial_code: "+379",
    },
    { name: "Honduras", flag: "🇭🇳", code: "HN", dial_code: "+504" },
    { name: "Hong Kong", flag: "🇭🇰", code: "HK", dial_code: "+852" },
    { name: "Hungary", flag: "🇭🇺", code: "HU", dial_code: "+36" },
    { name: "Iceland", flag: "🇮🇸", code: "IS", dial_code: "+354" },
    { name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" },
    { name: "Indonesia", flag: "🇮🇩", code: "ID", dial_code: "+62" },
    {
      name: "Iran, Islamic Republic of Persian Gulf",
      flag: "🇮🇷",
      code: "IR",
      dial_code: "+98",
    },
    { name: "Iraq", flag: "🇮🇶", code: "IQ", dial_code: "+964" },
    { name: "Ireland", flag: "🇮🇪", code: "IE", dial_code: "+353" },
    { name: "Isle of Man", flag: "🇮🇲", code: "IM", dial_code: "+44" },
    { name: "Israel", flag: "🇮🇱", code: "IL", dial_code: "+972" },
    { name: "Italy", flag: "🇮🇹", code: "IT", dial_code: "+39" },
    { name: "Jamaica", flag: "🇯🇲", code: "JM", dial_code: "+1876" },
    { name: "Japan", flag: "🇯🇵", code: "JP", dial_code: "+81" },
    { name: "Jersey", flag: "🇯🇪", code: "JE", dial_code: "+44" },
    { name: "Jordan", flag: "🇯🇴", code: "JO", dial_code: "+962" },
    { name: "Kazakhstan", flag: "🇰🇿", code: "KZ", dial_code: "+7" },
    { name: "Kenya", flag: "🇰🇪", code: "KE", dial_code: "+254" },
    { name: "Kiribati", flag: "🇰🇮", code: "KI", dial_code: "+686" },
    {
      name: "Korea, Democratic People's Republic of Korea",
      flag: "🇰🇵",
      code: "KP",
      dial_code: "+850",
    },
    {
      name: "Korea, Republic of South Korea",
      flag: "🇰🇷",
      code: "KR",
      dial_code: "+82",
    },
    { name: "Kosovo", flag: "🇽🇰", code: "XK", dial_code: "+383" },
    { name: "Kuwait", flag: "🇰🇼", code: "KW", dial_code: "+965" },
    { name: "Kyrgyzstan", flag: "🇰🇬", code: "KG", dial_code: "+996" },
    { name: "Laos", flag: "🇱🇦", code: "LA", dial_code: "+856" },
    { name: "Latvia", flag: "🇱🇻", code: "LV", dial_code: "+371" },
    { name: "Lebanon", flag: "🇱🇧", code: "LB", dial_code: "+961" },
    { name: "Lesotho", flag: "🇱🇸", code: "LS", dial_code: "+266" },
    { name: "Liberia", flag: "🇱🇷", code: "LR", dial_code: "+231" },
    {
      name: "Libyan Arab Jamahiriya",
      flag: "🇱🇾",
      code: "LY",
      dial_code: "+218",
    },
    { name: "Liechtenstein", flag: "🇱🇮", code: "LI", dial_code: "+423" },
    { name: "Lithuania", flag: "🇱🇹", code: "LT", dial_code: "+370" },
    { name: "Luxembourg", flag: "🇱🇺", code: "LU", dial_code: "+352" },
    { name: "Macao", flag: "🇲🇴", code: "MO", dial_code: "+853" },
    { name: "Macedonia", flag: "🇲🇰", code: "MK", dial_code: "+389" },
    { name: "Madagascar", flag: "🇲🇬", code: "MG", dial_code: "+261" },
    { name: "Malawi", flag: "🇲🇼", code: "MW", dial_code: "+265" },
    { name: "Malaysia", flag: "🇲🇾", code: "MY", dial_code: "+60" },
    { name: "Maldives", flag: "🇲🇻", code: "MV", dial_code: "+960" },
    { name: "Mali", flag: "🇲🇱", code: "ML", dial_code: "+223" },
    { name: "Malta", flag: "🇲🇹", code: "MT", dial_code: "+356" },
    { name: "Marshall Islands", flag: "🇲🇭", code: "MH", dial_code: "+692" },
    { name: "Martinique", flag: "🇲🇶", code: "MQ", dial_code: "+596" },
    { name: "Mauritania", flag: "🇲🇷", code: "MR", dial_code: "+222" },
    { name: "Mauritius", flag: "🇲🇺", code: "MU", dial_code: "+230" },
    { name: "Mayotte", flag: "🇾🇹", code: "YT", dial_code: "+262" },
    { name: "Mexico", flag: "🇲🇽", code: "MX", dial_code: "+52" },
    {
      name: "Micronesia, Federated States of Micronesia",
      flag: "🇫🇲",
      code: "FM",
      dial_code: "+691",
    },
    { name: "Moldova", flag: "🇲🇩", code: "MD", dial_code: "+373" },
    { name: "Monaco", flag: "🇲🇨", code: "MC", dial_code: "+377" },
    { name: "Mongolia", flag: "🇲🇳", code: "MN", dial_code: "+976" },
    { name: "Montenegro", flag: "🇲🇪", code: "ME", dial_code: "+382" },
    { name: "Montserrat", flag: "🇲🇸", code: "MS", dial_code: "+1664" },
    { name: "Morocco", flag: "🇲🇦", code: "MA", dial_code: "+212" },
    { name: "Mozambique", flag: "🇲🇿", code: "MZ", dial_code: "+258" },
    { name: "Myanmar", flag: "🇲🇲", code: "MM", dial_code: "+95" },
    { name: "Namibia", flag: "🇳🇦", code: "NA", dial_code: "+264" },
    { name: "Nauru", flag: "🇳🇷", code: "NR", dial_code: "+674" },
    { name: "Nepal", flag: "🇳🇵", code: "NP", dial_code: "+977" },
    { name: "Netherlands", flag: "🇳🇱", code: "NL", dial_code: "+31" },
    { name: "Netherlands Antilles", flag: "", code: "AN", dial_code: "+599" },
    { name: "New Caledonia", flag: "🇳🇨", code: "NC", dial_code: "+687" },
    { name: "New Zealand", flag: "🇳🇿", code: "NZ", dial_code: "+64" },
    { name: "Nicaragua", flag: "🇳🇮", code: "NI", dial_code: "+505" },
    { name: "Niger", flag: "🇳🇪", code: "NE", dial_code: "+227" },
    { name: "Nigeria", flag: "🇳🇬", code: "NG", dial_code: "+234" },
    { name: "Niue", flag: "🇳🇺", code: "NU", dial_code: "+683" },
    { name: "Norfolk Island", flag: "🇳🇫", code: "NF", dial_code: "+672" },
    {
      name: "Northern Mariana Islands",
      flag: "🇲🇵",
      code: "MP",
      dial_code: "+1670",
    },
    { name: "Norway", flag: "🇳🇴", code: "NO", dial_code: "+47" },
    { name: "Oman", flag: "🇴🇲", code: "OM", dial_code: "+968" },
    { name: "Pakistan", flag: "🇵🇰", code: "PK", dial_code: "+92" },
    { name: "Palau", flag: "🇵🇼", code: "PW", dial_code: "+680" },
    {
      name: "Palestinian Territory, Occupied",
      flag: "🇵🇸",
      code: "PS",
      dial_code: "+970",
    },
    { name: "Panama", flag: "🇵🇦", code: "PA", dial_code: "+507" },
    { name: "Papua New Guinea", flag: "🇵🇬", code: "PG", dial_code: "+675" },
    { name: "Paraguay", flag: "🇵🇾", code: "PY", dial_code: "+595" },
    { name: "Peru", flag: "🇵🇪", code: "PE", dial_code: "+51" },
    { name: "Philippines", flag: "🇵🇭", code: "PH", dial_code: "+63" },
    { name: "Pitcairn", flag: "🇵🇳", code: "PN", dial_code: "+64" },
    { name: "Poland", flag: "🇵🇱", code: "PL", dial_code: "+48" },
    { name: "Portugal", flag: "🇵🇹", code: "PT", dial_code: "+351" },
    { name: "Puerto Rico", flag: "🇵🇷", code: "PR", dial_code: "+1939" },
    { name: "Qatar", flag: "🇶🇦", code: "QA", dial_code: "+974" },
    { name: "Romania", flag: "🇷🇴", code: "RO", dial_code: "+40" },
    { name: "Russia", flag: "🇷🇺", code: "RU", dial_code: "+7" },
    { name: "Rwanda", flag: "🇷🇼", code: "RW", dial_code: "+250" },
    { name: "Reunion", flag: "🇷🇪", code: "RE", dial_code: "+262" },
    { name: "Saint Barthelemy", flag: "🇧🇱", code: "BL", dial_code: "+590" },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      flag: "🇸🇭",
      code: "SH",
      dial_code: "+290",
    },
    {
      name: "Saint Kitts and Nevis",
      flag: "🇰🇳",
      code: "KN",
      dial_code: "+1869",
    },
    { name: "Saint Lucia", flag: "🇱🇨", code: "LC", dial_code: "+1758" },
    { name: "Saint Martin", flag: "🇲🇫", code: "MF", dial_code: "+590" },
    {
      name: "Saint Pierre and Miquelon",
      flag: "🇵🇲",
      code: "PM",
      dial_code: "+508",
    },
    {
      name: "Saint Vincent and the Grenadines",
      flag: "🇻🇨",
      code: "VC",
      dial_code: "+1784",
    },
    { name: "Samoa", flag: "🇼🇸", code: "WS", dial_code: "+685" },
    { name: "San Marino", flag: "🇸🇲", code: "SM", dial_code: "+378" },
    {
      name: "Sao Tome and Principe",
      flag: "🇸🇹",
      code: "ST",
      dial_code: "+239",
    },
    { name: "Saudi Arabia", flag: "🇸🇦", code: "SA", dial_code: "+966" },
    { name: "Senegal", flag: "🇸🇳", code: "SN", dial_code: "+221" },
    { name: "Serbia", flag: "🇷🇸", code: "RS", dial_code: "+381" },
    { name: "Seychelles", flag: "🇸🇨", code: "SC", dial_code: "+248" },
    { name: "Sierra Leone", flag: "🇸🇱", code: "SL", dial_code: "+232" },
    { name: "Singapore", flag: "🇸🇬", code: "SG", dial_code: "+65" },
    { name: "Slovakia", flag: "🇸🇰", code: "SK", dial_code: "+421" },
    { name: "Slovenia", flag: "🇸🇮", code: "SI", dial_code: "+386" },
    { name: "Solomon Islands", flag: "🇸🇧", code: "SB", dial_code: "+677" },
    { name: "Somalia", flag: "🇸🇴", code: "SO", dial_code: "+252" },
    { name: "South Africa", flag: "🇿🇦", code: "ZA", dial_code: "+27" },
    { name: "South Sudan", flag: "🇸🇸", code: "SS", dial_code: "+211" },
    {
      name: "South Georgia and the South Sandwich Islands",
      flag: "🇬🇸",
      code: "GS",
      dial_code: "+500",
    },
    { name: "Spain", flag: "🇪🇸", code: "ES", dial_code: "+34" },
    { name: "Sri Lanka", flag: "🇱🇰", code: "LK", dial_code: "+94" },
    { name: "Sudan", flag: "🇸🇩", code: "SD", dial_code: "+249" },
    { name: "Suriname", flag: "🇸🇷", code: "SR", dial_code: "+597" },
    {
      name: "Svalbard and Jan Mayen",
      flag: "🇸🇯",
      code: "SJ",
      dial_code: "+47",
    },
    { name: "Eswatini", flag: "🇸🇿", code: "SZ", dial_code: "+268" },
    { name: "Sweden", flag: "🇸🇪", code: "SE", dial_code: "+46" },
    { name: "Switzerland", flag: "🇨🇭", code: "CH", dial_code: "+41" },
    { name: "Syrian Arab Republic", flag: "🇸🇾", code: "SY", dial_code: "+963" },
    { name: "Taiwan", flag: "🇹🇼", code: "TW", dial_code: "+886" },
    { name: "Tajikistan", flag: "🇹🇯", code: "TJ", dial_code: "+992" },
    {
      name: "Tanzania, United Republic of Tanzania",
      flag: "🇹🇿",
      code: "TZ",
      dial_code: "+255",
    },
    { name: "Thailand", flag: "🇹🇭", code: "TH", dial_code: "+66" },
    { name: "Timor-Leste", flag: "🇹🇱", code: "TL", dial_code: "+670" },
    { name: "Togo", flag: "🇹🇬", code: "TG", dial_code: "+228" },
    { name: "Tokelau", flag: "🇹🇰", code: "TK", dial_code: "+690" },
    { name: "Tonga", flag: "🇹🇴", code: "TO", dial_code: "+676" },
    { name: "Trinidad and Tobago", flag: "🇹🇹", code: "TT", dial_code: "+1868" },
    { name: "Tunisia", flag: "🇹🇳", code: "TN", dial_code: "+216" },
    { name: "Turkey", flag: "🇹🇷", code: "TR", dial_code: "+90" },
    { name: "Turkmenistan", flag: "🇹🇲", code: "TM", dial_code: "+993" },
    {
      name: "Turks and Caicos Islands",
      flag: "🇹🇨",
      code: "TC",
      dial_code: "+1649",
    },
    { name: "Tuvalu", flag: "🇹🇻", code: "TV", dial_code: "+688" },
    { name: "Uganda", flag: "🇺🇬", code: "UG", dial_code: "+256" },
    { name: "Ukraine", flag: "🇺🇦", code: "UA", dial_code: "+380" },
    { name: "United Arab Emirates", flag: "🇦🇪", code: "AE", dial_code: "+971" },
    { name: "United Kingdom", flag: "🇬🇧", code: "GB", dial_code: "+44" },
    { name: "United States", flag: "🇺🇸", code: "US", dial_code: "+1" },
    { name: "Uruguay", flag: "🇺🇾", code: "UY", dial_code: "+598" },
    { name: "Uzbekistan", flag: "🇺🇿", code: "UZ", dial_code: "+998" },
    { name: "Vanuatu", flag: "🇻🇺", code: "VU", dial_code: "+678" },
    {
      name: "Venezuela, Bolivarian Republic of Venezuela",
      flag: "🇻🇪",
      code: "VE",
      dial_code: "+58",
    },
    { name: "Vietnam", flag: "🇻🇳", code: "VN", dial_code: "+84" },
    {
      name: "Virgin Islands, British",
      flag: "🇻🇬",
      code: "VG",
      dial_code: "+1284",
    },
    {
      name: "Virgin Islands, U.S.",
      flag: "🇻🇮",
      code: "VI",
      dial_code: "+1340",
    },
    { name: "Wallis and Futuna", flag: "🇼🇫", code: "WF", dial_code: "+681" },
    { name: "Yemen", flag: "🇾🇪", code: "YE", dial_code: "+967" },
    { name: "Zambia", flag: "🇿🇲", code: "ZM", dial_code: "+260" },
    { name: "Zimbabwe", flag: "🇿🇼", code: "ZW", dial_code: "+263" },
  ];
  console.log(countriesArray);

  if (!window.code) {
    window.code = "+7";
  }

  const fakeselectbox = document.querySelector(".select-items");
  const option1 = document.querySelector("#form-contact");
  const option2 = document.querySelector("#phone-row");

  const optionModal1 = document.querySelector("#form-contact-modal");
  const optionModal2 = document.querySelector("#phone-row-modal");

  let activeSocialMedia = document.querySelector(".select-selected").innerHTML;

  fakeselectbox.addEventListener("click", () => {
    console.log("click");
    activeSocialMedia = document.querySelector(".select-selected").innerHTML;
    if (activeSocialMedia === "Email") {
      option1.style.display = "flex";
      option2.style.display = "none";
    } else {
      option1.style.display = "none";
      option2.style.display = "flex";
    }
  });

  function handleCountrycode(e) {
    const id = e.target.id;
    if (
      !document
        .querySelector(
          `${id === "countrycode" ? "#searchcode" : "#searchcode-modal"}`
        )
        .contains(e.target)
    ) {
      console.log("click2");
      console.log(countrycode.getAttribute("data-active"));
      const countrycodeSelector = document.querySelector(
        `${
          id === "countrycode"
            ? "#countrycode-selector"
            : "#countrycode-selector-modal"
        }`
      );
      if (countrycode.getAttribute("data-active") === "false") {
        countrycode.setAttribute("data-active", "true");
        countrycodeSelector.style.display = "flex";

        const list = document.querySelector(
          `${
            id === "countrycode" ? "#countries-list" : "#countries-list-modal"
          }`
        );
        let html = "";

        for (let i = 0; i < countriesArray.length; i++) {
          country = countriesArray[i];
          html +=
            '<div class="country" data-code="' +
            country.code +
            '"><span>' +
            country.flag +
            "</span><span>" +
            country.name +
            "</span><span>" +
            country.dial_code +
            "</span></div>";
        }
        list.innerHTML = html;

        const countries = document.querySelectorAll(".country");
        countries.forEach((country) => {
          country.addEventListener("click", function () {
            console.log(country.getAttribute("data-code"));
            console.log(country);
            const dialCode =
              country.childNodes[country.childNodes.length - 1].innerHTML;
            console.log(dialCode);

            window.code = dialCode;

            // var isToggleContry = true;
            countrycodeSelector.style.display = "none";
            const chosenCountry = countriesArray.find(
              (item) => item.code === country.getAttribute("data-code")
            );
            document.querySelector(
              `${
                id === "countrycode" ? "#country-value" : "#country-value-modal"
              }`
            ).innerHTML =
              `${
                id === "countrycode"
                  ? '<span id="flag">' + chosenCountry.flag + "</span>"
                  : '<span id="flag-modalmodal">' +
                    chosenCountry.flag +
                    "</span>"
              }` +
              `${
                id === "countrycode"
                  ? '<span id="dialcode">' + chosenCountry.dial_code + "</span>"
                  : '<span id="dialcode-modal">' +
                    chosenCountry.dial_code +
                    "</span>"
              }`;
            document
              .querySelector(
                `${
                  id === "countrycode"
                    ? "#country-value"
                    : "#country-value-modal"
                }`
              )
              .setAttribute("data-value", chosenCountry.code);
          });
        });
      } else {
        countrycode.setAttribute("data-active", "false");
        countrycodeSelector.style.display = "none";
        document.querySelector(
          `${id === "countrycode" ? "#searchcode" : "#searchcode-modal"}`
        ).value = "";
      }
    }
  }

  const countrycode = document.querySelector("#countrycode");
  const countrycodeModal = document.querySelector("#countrycode-modal");

  countrycode.addEventListener("click", (e) => handleCountrycode(e));
  countrycodeModal.addEventListener("click", (e) => handleCountrycode(e));

  document.addEventListener("click", function (e) {
    const id = e.target.id;

    if (id === "countrycode") {
      if (
        document.querySelector("#countrycode-selector") &&
        !document.querySelector("#countrycode").contains(e.target)
      ) {
        countrycode.setAttribute("data-active", "false");
        document.querySelector("#countrycode-selector").style.display = "none";
        document.querySelector("#searchcode").value = "";
      }
    } else {
      if (
        document.querySelector("#countrycode-selector-modal") &&
        !document.querySelector("#countrycode-modal").contains(e.target)
      ) {
        countrycode.setAttribute("data-active", "false");
        document.querySelector("#countrycode-selector-modal").style.display =
          "none";
        document.querySelector("#searchcode-modal").value = "";
      }
    }
  });

  function handleSearchCode(e) {
    const id = e.target.id;
    console.log(e.target.value);

    if (e.target.value) {
      const list = document.querySelector(
        `${id === "searchcode" ? "#countries-list" : "#countries-list-modal"}`
      );
      let html = "";
      const newArray = countriesArray.filter(
        (country) =>
          country.code.toLowerCase().includes(e.target.value.toLowerCase()) ||
          country.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          country.dial_code.toLowerCase().includes(e.target.value.toLowerCase())
      );

      for (let i = 0; i < newArray.length; i++) {
        country = newArray[i];
        html +=
          '<div class="country" data-code="' +
          country.code +
          '"><span>' +
          country.flag +
          "</span><span>" +
          country.name +
          "</span><span>" +
          country.dial_code +
          "</span></div>";
      }
      list.innerHTML = html;
    } else {
      const list = document.querySelector(
        `${id === "searchcode" ? "#countries-list" : "#countries-list-modal"}`
      );
      let html = "";

      for (let i = 0; i < countriesArray.length; i++) {
        country = countriesArray[i];
        html +=
          '<div class="country" data-code="' +
          country.code +
          '"><span>' +
          country.flag +
          "</span><span>" +
          country.name +
          "</span><span>" +
          country.dial_code +
          "</span></div>";
      }
      list.innerHTML = html;
    }

    const countrycodeSelector = document.querySelector(
      `${
        id === "searchcode"
          ? "#countrycode-selector"
          : "#countrycode-selector-modal"
      }`
    );
    const countries = document.querySelectorAll(".country");
    countries.forEach((country) => {
      country.addEventListener("click", function () {
        console.log(country.getAttribute("data-code"));
        countrycodeSelector.style.display = "none";
        const chosenCountry = countriesArray.find(
          (item) => item.code === country.getAttribute("data-code")
        );
        window.code = chosenCountry.dial_code;
        document.querySelector(
          `${id === "searchcode" ? "#country-value" : "#country-value-modal"}`
        ).innerHTML =
          `${
            id === "searchcode"
              ? '<span id="flag">' + chosenCountry.flag + "</span> "
              : '<span id="flag-modal">' + chosenCountry.flag + "</span> "
          }` +
          `${
            id === "searchcode"
              ? '<span id="dialcode">' + chosenCountry.dial_code + "</span> "
              : '<span id="dialcode-modal">' +
                chosenCountry.dial_code +
                "</span> "
          }`;

        document
          .querySelector(
            `${id === "searchcode" ? "#country-value" : "#country-value-modal"}`
          )
          .setAttribute("data-value", chosenCountry.code);
      });
    });
  }

  const searchcode = document.querySelector("#searchcode");
  const searchcodeModal = document.querySelector("#searchcode-modal");

  searchcode.addEventListener("input", (e) => handleSearchCode(e));
  searchcodeModal.addEventListener("input", (e) => handleSearchCode(e));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3VudHJ5LXNlbGVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY291bnRyaWVzQXJyYXkgPSBbXG4gICAgeyBuYW1lOiBcIkFmZ2hhbmlzdGFuXCIsIGZsYWc6IFwi8J+HpvCfh6tcIiwgY29kZTogXCJBRlwiLCBkaWFsX2NvZGU6IFwiKzkzXCIgfSxcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCLwn4em8J+HvVwiLCBjb2RlOiBcIkFYXCIsIGRpYWxfY29kZTogXCIrMzU4XCIgfSxcbiAgICB7IG5hbWU6IFwiQWxiYW5pYVwiLCBmbGFnOiBcIvCfh6bwn4exXCIsIGNvZGU6IFwiQUxcIiwgZGlhbF9jb2RlOiBcIiszNTVcIiB9LFxuICAgIHsgbmFtZTogXCJBbGdlcmlhXCIsIGZsYWc6IFwi8J+HqfCfh79cIiwgY29kZTogXCJEWlwiLCBkaWFsX2NvZGU6IFwiKzIxM1wiIH0sXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNhbW9hXCIsIGZsYWc6IFwi8J+HpvCfh7hcIiwgY29kZTogXCJBU1wiLCBkaWFsX2NvZGU6IFwiKzE2ODRcIiB9LFxuICAgIHsgbmFtZTogXCJBbmRvcnJhXCIsIGZsYWc6IFwi8J+HpvCfh6lcIiwgY29kZTogXCJBRFwiLCBkaWFsX2NvZGU6IFwiKzM3NlwiIH0sXG4gICAgeyBuYW1lOiBcIkFuZ29sYVwiLCBmbGFnOiBcIvCfh6bwn4e0XCIsIGNvZGU6IFwiQU9cIiwgZGlhbF9jb2RlOiBcIisyNDRcIiB9LFxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcIvCfh6bwn4euXCIsIGNvZGU6IFwiQUlcIiwgZGlhbF9jb2RlOiBcIisxMjY0XCIgfSxcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcIvCfh6bwn4e2XCIsIGNvZGU6IFwiQVFcIiwgZGlhbF9jb2RlOiBcIis2NzJcIiB9LFxuICAgIHsgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIGZsYWc6IFwi8J+HpvCfh6xcIiwgY29kZTogXCJBR1wiLCBkaWFsX2NvZGU6IFwiKzEyNjhcIiB9LFxuICAgIHsgbmFtZTogXCJBcmdlbnRpbmFcIiwgZmxhZzogXCLwn4em8J+Ht1wiLCBjb2RlOiBcIkFSXCIsIGRpYWxfY29kZTogXCIrNTRcIiB9LFxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwi8J+HpvCfh7JcIiwgY29kZTogXCJBTVwiLCBkaWFsX2NvZGU6IFwiKzM3NFwiIH0sXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwi8J+HpvCfh7xcIiwgY29kZTogXCJBV1wiLCBkaWFsX2NvZGU6IFwiKzI5N1wiIH0sXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcIvCfh6bwn4e6XCIsIGNvZGU6IFwiQVVcIiwgZGlhbF9jb2RlOiBcIis2MVwiIH0sXG4gICAgeyBuYW1lOiBcIkF1c3RyaWFcIiwgZmxhZzogXCLwn4em8J+HuVwiLCBjb2RlOiBcIkFUXCIsIGRpYWxfY29kZTogXCIrNDNcIiB9LFxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwi8J+HpvCfh79cIiwgY29kZTogXCJBWlwiLCBkaWFsX2NvZGU6IFwiKzk5NFwiIH0sXG4gICAgeyBuYW1lOiBcIkJhaGFtYXNcIiwgZmxhZzogXCLwn4en8J+HuFwiLCBjb2RlOiBcIkJTXCIsIGRpYWxfY29kZTogXCIrMTI0MlwiIH0sXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCLwn4en8J+HrVwiLCBjb2RlOiBcIkJIXCIsIGRpYWxfY29kZTogXCIrOTczXCIgfSxcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcIvCfh6fwn4epXCIsIGNvZGU6IFwiQkRcIiwgZGlhbF9jb2RlOiBcIis4ODBcIiB9LFxuICAgIHsgbmFtZTogXCJCYXJiYWRvc1wiLCBmbGFnOiBcIvCfh6fwn4enXCIsIGNvZGU6IFwiQkJcIiwgZGlhbF9jb2RlOiBcIisxMjQ2XCIgfSxcbiAgICB7IG5hbWU6IFwiQmVsYXJ1c1wiLCBmbGFnOiBcIvCfh6fwn4e+XCIsIGNvZGU6IFwiQllcIiwgZGlhbF9jb2RlOiBcIiszNzVcIiB9LFxuICAgIHsgbmFtZTogXCJCZWxnaXVtXCIsIGZsYWc6IFwi8J+Hp/Cfh6pcIiwgY29kZTogXCJCRVwiLCBkaWFsX2NvZGU6IFwiKzMyXCIgfSxcbiAgICB7IG5hbWU6IFwiQmVsaXplXCIsIGZsYWc6IFwi8J+Hp/Cfh79cIiwgY29kZTogXCJCWlwiLCBkaWFsX2NvZGU6IFwiKzUwMVwiIH0sXG4gICAgeyBuYW1lOiBcIkJlbmluXCIsIGZsYWc6IFwi8J+Hp/Cfh69cIiwgY29kZTogXCJCSlwiLCBkaWFsX2NvZGU6IFwiKzIyOVwiIH0sXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCLwn4en8J+HslwiLCBjb2RlOiBcIkJNXCIsIGRpYWxfY29kZTogXCIrMTQ0MVwiIH0sXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcIvCfh6fwn4e5XCIsIGNvZGU6IFwiQlRcIiwgZGlhbF9jb2RlOiBcIis5NzVcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZiBib2xpdmlhXCIsXG4gICAgICBmbGFnOiBcIvCfh6fwn4e0XCIsXG4gICAgICBjb2RlOiBcIkJPXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzU5MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsXG4gICAgICBmbGFnOiBcIvCfh6fwn4emXCIsXG4gICAgICBjb2RlOiBcIkJBXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzM4N1wiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIkJvdHN3YW5hXCIsIGZsYWc6IFwi8J+Hp/Cfh7xcIiwgY29kZTogXCJCV1wiLCBkaWFsX2NvZGU6IFwiKzI2N1wiIH0sXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCLwn4en8J+Hu1wiLCBjb2RlOiBcIkJWXCIsIGRpYWxfY29kZTogXCIrNDdcIiB9LFxuICAgIHsgbmFtZTogXCJCcmF6aWxcIiwgZmxhZzogXCLwn4en8J+Ht1wiLCBjb2RlOiBcIkJSXCIsIGRpYWxfY29kZTogXCIrNTVcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsXG4gICAgICBmbGFnOiBcIvCfh67wn4e0XCIsXG4gICAgICBjb2RlOiBcIklPXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzI0NlwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIkJydW5laSBEYXJ1c3NhbGFtXCIsIGZsYWc6IFwi8J+Hp/Cfh7NcIiwgY29kZTogXCJCTlwiLCBkaWFsX2NvZGU6IFwiKzY3M1wiIH0sXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIGZsYWc6IFwi8J+Hp/Cfh6xcIiwgY29kZTogXCJCR1wiLCBkaWFsX2NvZGU6IFwiKzM1OVwiIH0sXG4gICAgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCBmbGFnOiBcIvCfh6fwn4erXCIsIGNvZGU6IFwiQkZcIiwgZGlhbF9jb2RlOiBcIisyMjZcIiB9LFxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwi8J+Hp/Cfh65cIiwgY29kZTogXCJCSVwiLCBkaWFsX2NvZGU6IFwiKzI1N1wiIH0sXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwi8J+HsPCfh61cIiwgY29kZTogXCJLSFwiLCBkaWFsX2NvZGU6IFwiKzg1NVwiIH0sXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwi8J+HqPCfh7JcIiwgY29kZTogXCJDTVwiLCBkaWFsX2NvZGU6IFwiKzIzN1wiIH0sXG4gICAgeyBuYW1lOiBcIkNhbmFkYVwiLCBmbGFnOiBcIvCfh6jwn4emXCIsIGNvZGU6IFwiQ0FcIiwgZGlhbF9jb2RlOiBcIisxXCIgfSxcbiAgICB7IG5hbWU6IFwiQ2FwZSBWZXJkZVwiLCBmbGFnOiBcIvCfh6jwn4e7XCIsIGNvZGU6IFwiQ1ZcIiwgZGlhbF9jb2RlOiBcIisyMzhcIiB9LFxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcIvCfh7Dwn4e+XCIsIGNvZGU6IFwiS1lcIiwgZGlhbF9jb2RlOiBcIiszNDVcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsXG4gICAgICBmbGFnOiBcIvCfh6jwn4erXCIsXG4gICAgICBjb2RlOiBcIkNGXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzIzNlwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCLwn4e58J+HqVwiLCBjb2RlOiBcIlREXCIsIGRpYWxfY29kZTogXCIrMjM1XCIgfSxcbiAgICB7IG5hbWU6IFwiQ2hpbGVcIiwgZmxhZzogXCLwn4eo8J+HsVwiLCBjb2RlOiBcIkNMXCIsIGRpYWxfY29kZTogXCIrNTZcIiB9LFxuICAgIHsgbmFtZTogXCJDaGluYVwiLCBmbGFnOiBcIvCfh6jwn4ezXCIsIGNvZGU6IFwiQ05cIiwgZGlhbF9jb2RlOiBcIis4NlwiIH0sXG4gICAgeyBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgZmxhZzogXCLwn4eo8J+HvVwiLCBjb2RlOiBcIkNYXCIsIGRpYWxfY29kZTogXCIrNjFcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIixcbiAgICAgIGZsYWc6IFwi8J+HqPCfh6hcIixcbiAgICAgIGNvZGU6IFwiQ0NcIixcbiAgICAgIGRpYWxfY29kZTogXCIrNjFcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcIvCfh6jwn4e0XCIsIGNvZGU6IFwiQ09cIiwgZGlhbF9jb2RlOiBcIis1N1wiIH0sXG4gICAgeyBuYW1lOiBcIkNvbW9yb3NcIiwgZmxhZzogXCLwn4ew8J+HslwiLCBjb2RlOiBcIktNXCIsIGRpYWxfY29kZTogXCIrMjY5XCIgfSxcbiAgICB7IG5hbWU6IFwiQ29uZ29cIiwgZmxhZzogXCLwn4eo8J+HrFwiLCBjb2RlOiBcIkNHXCIsIGRpYWxfY29kZTogXCIrMjQyXCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkNvbmdvLCBUaGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ29cIixcbiAgICAgIGZsYWc6IFwi8J+HqPCfh6lcIixcbiAgICAgIGNvZGU6IFwiQ0RcIixcbiAgICAgIGRpYWxfY29kZTogXCIrMjQzXCIsXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiQ29vayBJc2xhbmRzXCIsIGZsYWc6IFwi8J+HqPCfh7BcIiwgY29kZTogXCJDS1wiLCBkaWFsX2NvZGU6IFwiKzY4MlwiIH0sXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCLwn4eo8J+Ht1wiLCBjb2RlOiBcIkNSXCIsIGRpYWxfY29kZTogXCIrNTA2XCIgfSxcbiAgICB7IG5hbWU6IFwiQ290ZSBkJ0l2b2lyZVwiLCBmbGFnOiBcIvCfh6jwn4euXCIsIGNvZGU6IFwiQ0lcIiwgZGlhbF9jb2RlOiBcIisyMjVcIiB9LFxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwi8J+HrfCfh7dcIiwgY29kZTogXCJIUlwiLCBkaWFsX2NvZGU6IFwiKzM4NVwiIH0sXG4gICAgeyBuYW1lOiBcIkN1YmFcIiwgZmxhZzogXCLwn4eo8J+HulwiLCBjb2RlOiBcIkNVXCIsIGRpYWxfY29kZTogXCIrNTNcIiB9LFxuICAgIHsgbmFtZTogXCJDeXBydXNcIiwgZmxhZzogXCLwn4eo8J+HvlwiLCBjb2RlOiBcIkNZXCIsIGRpYWxfY29kZTogXCIrMzU3XCIgfSxcbiAgICB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgZmxhZzogXCLwn4eo8J+Hv1wiLCBjb2RlOiBcIkNaXCIsIGRpYWxfY29kZTogXCIrNDIwXCIgfSxcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcIvCfh6nwn4ewXCIsIGNvZGU6IFwiREtcIiwgZGlhbF9jb2RlOiBcIis0NVwiIH0sXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwi8J+HqfCfh69cIiwgY29kZTogXCJESlwiLCBkaWFsX2NvZGU6IFwiKzI1M1wiIH0sXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwi8J+HqfCfh7JcIiwgY29kZTogXCJETVwiLCBkaWFsX2NvZGU6IFwiKzE3NjdcIiB9LFxuICAgIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCLwn4ep8J+HtFwiLCBjb2RlOiBcIkRPXCIsIGRpYWxfY29kZTogXCIrMTg0OVwiIH0sXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCLwn4eq8J+HqFwiLCBjb2RlOiBcIkVDXCIsIGRpYWxfY29kZTogXCIrNTkzXCIgfSxcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCLwn4eq8J+HrFwiLCBjb2RlOiBcIkVHXCIsIGRpYWxfY29kZTogXCIrMjBcIiB9LFxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcIvCfh7jwn4e7XCIsIGNvZGU6IFwiU1ZcIiwgZGlhbF9jb2RlOiBcIis1MDNcIiB9LFxuICAgIHsgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBmbGFnOiBcIvCfh6zwn4e2XCIsIGNvZGU6IFwiR1FcIiwgZGlhbF9jb2RlOiBcIisyNDBcIiB9LFxuICAgIHsgbmFtZTogXCJFcml0cmVhXCIsIGZsYWc6IFwi8J+HqvCfh7dcIiwgY29kZTogXCJFUlwiLCBkaWFsX2NvZGU6IFwiKzI5MVwiIH0sXG4gICAgeyBuYW1lOiBcIkVzdG9uaWFcIiwgZmxhZzogXCLwn4eq8J+HqlwiLCBjb2RlOiBcIkVFXCIsIGRpYWxfY29kZTogXCIrMzcyXCIgfSxcbiAgICB7IG5hbWU6IFwiRXRoaW9waWFcIiwgZmxhZzogXCLwn4eq8J+HuVwiLCBjb2RlOiBcIkVUXCIsIGRpYWxfY29kZTogXCIrMjUxXCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLFxuICAgICAgZmxhZzogXCLwn4er8J+HsFwiLFxuICAgICAgY29kZTogXCJGS1wiLFxuICAgICAgZGlhbF9jb2RlOiBcIis1MDBcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCIsIGZsYWc6IFwi8J+Hq/Cfh7RcIiwgY29kZTogXCJGT1wiLCBkaWFsX2NvZGU6IFwiKzI5OFwiIH0sXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCLwn4er8J+Hr1wiLCBjb2RlOiBcIkZKXCIsIGRpYWxfY29kZTogXCIrNjc5XCIgfSxcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcIvCfh6vwn4euXCIsIGNvZGU6IFwiRklcIiwgZGlhbF9jb2RlOiBcIiszNThcIiB9LFxuICAgIHsgbmFtZTogXCJGcmFuY2VcIiwgZmxhZzogXCLwn4er8J+Ht1wiLCBjb2RlOiBcIkZSXCIsIGRpYWxfY29kZTogXCIrMzNcIiB9LFxuICAgIHsgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCIsIGZsYWc6IFwi8J+HrPCfh6tcIiwgY29kZTogXCJHRlwiLCBkaWFsX2NvZGU6IFwiKzU5NFwiIH0sXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCLwn4e18J+Hq1wiLCBjb2RlOiBcIlBGXCIsIGRpYWxfY29kZTogXCIrNjg5XCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLFxuICAgICAgZmxhZzogXCLwn4e58J+Hq1wiLFxuICAgICAgY29kZTogXCJURlwiLFxuICAgICAgZGlhbF9jb2RlOiBcIisyNjJcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJHYWJvblwiLCBmbGFnOiBcIvCfh6zwn4emXCIsIGNvZGU6IFwiR0FcIiwgZGlhbF9jb2RlOiBcIisyNDFcIiB9LFxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCLwn4es8J+HslwiLCBjb2RlOiBcIkdNXCIsIGRpYWxfY29kZTogXCIrMjIwXCIgfSxcbiAgICB7IG5hbWU6IFwiR2VvcmdpYVwiLCBmbGFnOiBcIvCfh6zwn4eqXCIsIGNvZGU6IFwiR0VcIiwgZGlhbF9jb2RlOiBcIis5OTVcIiB9LFxuICAgIHsgbmFtZTogXCJHZXJtYW55XCIsIGZsYWc6IFwi8J+HqfCfh6pcIiwgY29kZTogXCJERVwiLCBkaWFsX2NvZGU6IFwiKzQ5XCIgfSxcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCLwn4es8J+HrVwiLCBjb2RlOiBcIkdIXCIsIGRpYWxfY29kZTogXCIrMjMzXCIgfSxcbiAgICB7IG5hbWU6IFwiR2licmFsdGFyXCIsIGZsYWc6IFwi8J+HrPCfh65cIiwgY29kZTogXCJHSVwiLCBkaWFsX2NvZGU6IFwiKzM1MFwiIH0sXG4gICAgeyBuYW1lOiBcIkdyZWVjZVwiLCBmbGFnOiBcIvCfh6zwn4e3XCIsIGNvZGU6IFwiR1JcIiwgZGlhbF9jb2RlOiBcIiszMFwiIH0sXG4gICAgeyBuYW1lOiBcIkdyZWVubGFuZFwiLCBmbGFnOiBcIvCfh6zwn4exXCIsIGNvZGU6IFwiR0xcIiwgZGlhbF9jb2RlOiBcIisyOTlcIiB9LFxuICAgIHsgbmFtZTogXCJHcmVuYWRhXCIsIGZsYWc6IFwi8J+HrPCfh6lcIiwgY29kZTogXCJHRFwiLCBkaWFsX2NvZGU6IFwiKzE0NzNcIiB9LFxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwi8J+HrPCfh7VcIiwgY29kZTogXCJHUFwiLCBkaWFsX2NvZGU6IFwiKzU5MFwiIH0sXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCLwn4es8J+HulwiLCBjb2RlOiBcIkdVXCIsIGRpYWxfY29kZTogXCIrMTY3MVwiIH0sXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcIvCfh6zwn4e5XCIsIGNvZGU6IFwiR1RcIiwgZGlhbF9jb2RlOiBcIis1MDJcIiB9LFxuICAgIHsgbmFtZTogXCJHdWVybnNleVwiLCBmbGFnOiBcIvCfh6zwn4esXCIsIGNvZGU6IFwiR0dcIiwgZGlhbF9jb2RlOiBcIis0NFwiIH0sXG4gICAgeyBuYW1lOiBcIkd1aW5lYVwiLCBmbGFnOiBcIvCfh6zwn4ezXCIsIGNvZGU6IFwiR05cIiwgZGlhbF9jb2RlOiBcIisyMjRcIiB9LFxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwi8J+HrPCfh7xcIiwgY29kZTogXCJHV1wiLCBkaWFsX2NvZGU6IFwiKzI0NVwiIH0sXG4gICAgeyBuYW1lOiBcIkd1eWFuYVwiLCBmbGFnOiBcIvCfh6zwn4e+XCIsIGNvZGU6IFwiR1lcIiwgZGlhbF9jb2RlOiBcIis1OTJcIiB9LFxuICAgIHsgbmFtZTogXCJIYWl0aVwiLCBmbGFnOiBcIvCfh63wn4e5XCIsIGNvZGU6IFwiSFRcIiwgZGlhbF9jb2RlOiBcIis1MDlcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY2RvbmFsZCBJc2xhbmRzXCIsXG4gICAgICBmbGFnOiBcIvCfh63wn4eyXCIsXG4gICAgICBjb2RlOiBcIkhNXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzY3MlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKVwiLFxuICAgICAgZmxhZzogXCLwn4e78J+HplwiLFxuICAgICAgY29kZTogXCJWQVwiLFxuICAgICAgZGlhbF9jb2RlOiBcIiszNzlcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJIb25kdXJhc1wiLCBmbGFnOiBcIvCfh63wn4ezXCIsIGNvZGU6IFwiSE5cIiwgZGlhbF9jb2RlOiBcIis1MDRcIiB9LFxuICAgIHsgbmFtZTogXCJIb25nIEtvbmdcIiwgZmxhZzogXCLwn4et8J+HsFwiLCBjb2RlOiBcIkhLXCIsIGRpYWxfY29kZTogXCIrODUyXCIgfSxcbiAgICB7IG5hbWU6IFwiSHVuZ2FyeVwiLCBmbGFnOiBcIvCfh63wn4e6XCIsIGNvZGU6IFwiSFVcIiwgZGlhbF9jb2RlOiBcIiszNlwiIH0sXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCLwn4eu8J+HuFwiLCBjb2RlOiBcIklTXCIsIGRpYWxfY29kZTogXCIrMzU0XCIgfSxcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCLwn4eu8J+Hs1wiLCBjb2RlOiBcIklOXCIsIGRpYWxfY29kZTogXCIrOTFcIiB9LFxuICAgIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgZmxhZzogXCLwn4eu8J+HqVwiLCBjb2RlOiBcIklEXCIsIGRpYWxfY29kZTogXCIrNjJcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZiBQZXJzaWFuIEd1bGZcIixcbiAgICAgIGZsYWc6IFwi8J+HrvCfh7dcIixcbiAgICAgIGNvZGU6IFwiSVJcIixcbiAgICAgIGRpYWxfY29kZTogXCIrOThcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwi8J+HrvCfh7ZcIiwgY29kZTogXCJJUVwiLCBkaWFsX2NvZGU6IFwiKzk2NFwiIH0sXG4gICAgeyBuYW1lOiBcIklyZWxhbmRcIiwgZmxhZzogXCLwn4eu8J+HqlwiLCBjb2RlOiBcIklFXCIsIGRpYWxfY29kZTogXCIrMzUzXCIgfSxcbiAgICB7IG5hbWU6IFwiSXNsZSBvZiBNYW5cIiwgZmxhZzogXCLwn4eu8J+HslwiLCBjb2RlOiBcIklNXCIsIGRpYWxfY29kZTogXCIrNDRcIiB9LFxuICAgIHsgbmFtZTogXCJJc3JhZWxcIiwgZmxhZzogXCLwn4eu8J+HsVwiLCBjb2RlOiBcIklMXCIsIGRpYWxfY29kZTogXCIrOTcyXCIgfSxcbiAgICB7IG5hbWU6IFwiSXRhbHlcIiwgZmxhZzogXCLwn4eu8J+HuVwiLCBjb2RlOiBcIklUXCIsIGRpYWxfY29kZTogXCIrMzlcIiB9LFxuICAgIHsgbmFtZTogXCJKYW1haWNhXCIsIGZsYWc6IFwi8J+Hr/Cfh7JcIiwgY29kZTogXCJKTVwiLCBkaWFsX2NvZGU6IFwiKzE4NzZcIiB9LFxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcIvCfh6/wn4e1XCIsIGNvZGU6IFwiSlBcIiwgZGlhbF9jb2RlOiBcIis4MVwiIH0sXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcIvCfh6/wn4eqXCIsIGNvZGU6IFwiSkVcIiwgZGlhbF9jb2RlOiBcIis0NFwiIH0sXG4gICAgeyBuYW1lOiBcIkpvcmRhblwiLCBmbGFnOiBcIvCfh6/wn4e0XCIsIGNvZGU6IFwiSk9cIiwgZGlhbF9jb2RlOiBcIis5NjJcIiB9LFxuICAgIHsgbmFtZTogXCJLYXpha2hzdGFuXCIsIGZsYWc6IFwi8J+HsPCfh79cIiwgY29kZTogXCJLWlwiLCBkaWFsX2NvZGU6IFwiKzdcIiB9LFxuICAgIHsgbmFtZTogXCJLZW55YVwiLCBmbGFnOiBcIvCfh7Dwn4eqXCIsIGNvZGU6IFwiS0VcIiwgZGlhbF9jb2RlOiBcIisyNTRcIiB9LFxuICAgIHsgbmFtZTogXCJLaXJpYmF0aVwiLCBmbGFnOiBcIvCfh7Dwn4euXCIsIGNvZGU6IFwiS0lcIiwgZGlhbF9jb2RlOiBcIis2ODZcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgS29yZWFcIixcbiAgICAgIGZsYWc6IFwi8J+HsPCfh7VcIixcbiAgICAgIGNvZGU6IFwiS1BcIixcbiAgICAgIGRpYWxfY29kZTogXCIrODUwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZiBTb3V0aCBLb3JlYVwiLFxuICAgICAgZmxhZzogXCLwn4ew8J+Ht1wiLFxuICAgICAgY29kZTogXCJLUlwiLFxuICAgICAgZGlhbF9jb2RlOiBcIis4MlwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIktvc292b1wiLCBmbGFnOiBcIvCfh73wn4ewXCIsIGNvZGU6IFwiWEtcIiwgZGlhbF9jb2RlOiBcIiszODNcIiB9LFxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCLwn4ew8J+HvFwiLCBjb2RlOiBcIktXXCIsIGRpYWxfY29kZTogXCIrOTY1XCIgfSxcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcIvCfh7Dwn4esXCIsIGNvZGU6IFwiS0dcIiwgZGlhbF9jb2RlOiBcIis5OTZcIiB9LFxuICAgIHsgbmFtZTogXCJMYW9zXCIsIGZsYWc6IFwi8J+HsfCfh6ZcIiwgY29kZTogXCJMQVwiLCBkaWFsX2NvZGU6IFwiKzg1NlwiIH0sXG4gICAgeyBuYW1lOiBcIkxhdHZpYVwiLCBmbGFnOiBcIvCfh7Hwn4e7XCIsIGNvZGU6IFwiTFZcIiwgZGlhbF9jb2RlOiBcIiszNzFcIiB9LFxuICAgIHsgbmFtZTogXCJMZWJhbm9uXCIsIGZsYWc6IFwi8J+HsfCfh6dcIiwgY29kZTogXCJMQlwiLCBkaWFsX2NvZGU6IFwiKzk2MVwiIH0sXG4gICAgeyBuYW1lOiBcIkxlc290aG9cIiwgZmxhZzogXCLwn4ex8J+HuFwiLCBjb2RlOiBcIkxTXCIsIGRpYWxfY29kZTogXCIrMjY2XCIgfSxcbiAgICB7IG5hbWU6IFwiTGliZXJpYVwiLCBmbGFnOiBcIvCfh7Hwn4e3XCIsIGNvZGU6IFwiTFJcIiwgZGlhbF9jb2RlOiBcIisyMzFcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTGlieWFuIEFyYWIgSmFtYWhpcml5YVwiLFxuICAgICAgZmxhZzogXCLwn4ex8J+HvlwiLFxuICAgICAgY29kZTogXCJMWVwiLFxuICAgICAgZGlhbF9jb2RlOiBcIisyMThcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCIsIGZsYWc6IFwi8J+HsfCfh65cIiwgY29kZTogXCJMSVwiLCBkaWFsX2NvZGU6IFwiKzQyM1wiIH0sXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcIvCfh7Hwn4e5XCIsIGNvZGU6IFwiTFRcIiwgZGlhbF9jb2RlOiBcIiszNzBcIiB9LFxuICAgIHsgbmFtZTogXCJMdXhlbWJvdXJnXCIsIGZsYWc6IFwi8J+HsfCfh7pcIiwgY29kZTogXCJMVVwiLCBkaWFsX2NvZGU6IFwiKzM1MlwiIH0sXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwi8J+HsvCfh7RcIiwgY29kZTogXCJNT1wiLCBkaWFsX2NvZGU6IFwiKzg1M1wiIH0sXG4gICAgeyBuYW1lOiBcIk1hY2Vkb25pYVwiLCBmbGFnOiBcIvCfh7Lwn4ewXCIsIGNvZGU6IFwiTUtcIiwgZGlhbF9jb2RlOiBcIiszODlcIiB9LFxuICAgIHsgbmFtZTogXCJNYWRhZ2FzY2FyXCIsIGZsYWc6IFwi8J+HsvCfh6xcIiwgY29kZTogXCJNR1wiLCBkaWFsX2NvZGU6IFwiKzI2MVwiIH0sXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcIvCfh7Lwn4e8XCIsIGNvZGU6IFwiTVdcIiwgZGlhbF9jb2RlOiBcIisyNjVcIiB9LFxuICAgIHsgbmFtZTogXCJNYWxheXNpYVwiLCBmbGFnOiBcIvCfh7Lwn4e+XCIsIGNvZGU6IFwiTVlcIiwgZGlhbF9jb2RlOiBcIis2MFwiIH0sXG4gICAgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIGZsYWc6IFwi8J+HsvCfh7tcIiwgY29kZTogXCJNVlwiLCBkaWFsX2NvZGU6IFwiKzk2MFwiIH0sXG4gICAgeyBuYW1lOiBcIk1hbGlcIiwgZmxhZzogXCLwn4ey8J+HsVwiLCBjb2RlOiBcIk1MXCIsIGRpYWxfY29kZTogXCIrMjIzXCIgfSxcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCLwn4ey8J+HuVwiLCBjb2RlOiBcIk1UXCIsIGRpYWxfY29kZTogXCIrMzU2XCIgfSxcbiAgICB7IG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBmbGFnOiBcIvCfh7Lwn4etXCIsIGNvZGU6IFwiTUhcIiwgZGlhbF9jb2RlOiBcIis2OTJcIiB9LFxuICAgIHsgbmFtZTogXCJNYXJ0aW5pcXVlXCIsIGZsYWc6IFwi8J+HsvCfh7ZcIiwgY29kZTogXCJNUVwiLCBkaWFsX2NvZGU6IFwiKzU5NlwiIH0sXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCLwn4ey8J+Ht1wiLCBjb2RlOiBcIk1SXCIsIGRpYWxfY29kZTogXCIrMjIyXCIgfSxcbiAgICB7IG5hbWU6IFwiTWF1cml0aXVzXCIsIGZsYWc6IFwi8J+HsvCfh7pcIiwgY29kZTogXCJNVVwiLCBkaWFsX2NvZGU6IFwiKzIzMFwiIH0sXG4gICAgeyBuYW1lOiBcIk1heW90dGVcIiwgZmxhZzogXCLwn4e+8J+HuVwiLCBjb2RlOiBcIllUXCIsIGRpYWxfY29kZTogXCIrMjYyXCIgfSxcbiAgICB7IG5hbWU6IFwiTWV4aWNvXCIsIGZsYWc6IFwi8J+HsvCfh71cIiwgY29kZTogXCJNWFwiLCBkaWFsX2NvZGU6IFwiKzUyXCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYVwiLFxuICAgICAgZmxhZzogXCLwn4er8J+HslwiLFxuICAgICAgY29kZTogXCJGTVwiLFxuICAgICAgZGlhbF9jb2RlOiBcIis2OTFcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJNb2xkb3ZhXCIsIGZsYWc6IFwi8J+HsvCfh6lcIiwgY29kZTogXCJNRFwiLCBkaWFsX2NvZGU6IFwiKzM3M1wiIH0sXG4gICAgeyBuYW1lOiBcIk1vbmFjb1wiLCBmbGFnOiBcIvCfh7Lwn4eoXCIsIGNvZGU6IFwiTUNcIiwgZGlhbF9jb2RlOiBcIiszNzdcIiB9LFxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcIvCfh7Lwn4ezXCIsIGNvZGU6IFwiTU5cIiwgZGlhbF9jb2RlOiBcIis5NzZcIiB9LFxuICAgIHsgbmFtZTogXCJNb250ZW5lZ3JvXCIsIGZsYWc6IFwi8J+HsvCfh6pcIiwgY29kZTogXCJNRVwiLCBkaWFsX2NvZGU6IFwiKzM4MlwiIH0sXG4gICAgeyBuYW1lOiBcIk1vbnRzZXJyYXRcIiwgZmxhZzogXCLwn4ey8J+HuFwiLCBjb2RlOiBcIk1TXCIsIGRpYWxfY29kZTogXCIrMTY2NFwiIH0sXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCLwn4ey8J+HplwiLCBjb2RlOiBcIk1BXCIsIGRpYWxfY29kZTogXCIrMjEyXCIgfSxcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcIvCfh7Lwn4e/XCIsIGNvZGU6IFwiTVpcIiwgZGlhbF9jb2RlOiBcIisyNThcIiB9LFxuICAgIHsgbmFtZTogXCJNeWFubWFyXCIsIGZsYWc6IFwi8J+HsvCfh7JcIiwgY29kZTogXCJNTVwiLCBkaWFsX2NvZGU6IFwiKzk1XCIgfSxcbiAgICB7IG5hbWU6IFwiTmFtaWJpYVwiLCBmbGFnOiBcIvCfh7Pwn4emXCIsIGNvZGU6IFwiTkFcIiwgZGlhbF9jb2RlOiBcIisyNjRcIiB9LFxuICAgIHsgbmFtZTogXCJOYXVydVwiLCBmbGFnOiBcIvCfh7Pwn4e3XCIsIGNvZGU6IFwiTlJcIiwgZGlhbF9jb2RlOiBcIis2NzRcIiB9LFxuICAgIHsgbmFtZTogXCJOZXBhbFwiLCBmbGFnOiBcIvCfh7Pwn4e1XCIsIGNvZGU6IFwiTlBcIiwgZGlhbF9jb2RlOiBcIis5NzdcIiB9LFxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcIvCfh7Pwn4exXCIsIGNvZGU6IFwiTkxcIiwgZGlhbF9jb2RlOiBcIiszMVwiIH0sXG4gICAgeyBuYW1lOiBcIk5ldGhlcmxhbmRzIEFudGlsbGVzXCIsIGZsYWc6IFwiXCIsIGNvZGU6IFwiQU5cIiwgZGlhbF9jb2RlOiBcIis1OTlcIiB9LFxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwi8J+Hs/Cfh6hcIiwgY29kZTogXCJOQ1wiLCBkaWFsX2NvZGU6IFwiKzY4N1wiIH0sXG4gICAgeyBuYW1lOiBcIk5ldyBaZWFsYW5kXCIsIGZsYWc6IFwi8J+Hs/Cfh79cIiwgY29kZTogXCJOWlwiLCBkaWFsX2NvZGU6IFwiKzY0XCIgfSxcbiAgICB7IG5hbWU6IFwiTmljYXJhZ3VhXCIsIGZsYWc6IFwi8J+Hs/Cfh65cIiwgY29kZTogXCJOSVwiLCBkaWFsX2NvZGU6IFwiKzUwNVwiIH0sXG4gICAgeyBuYW1lOiBcIk5pZ2VyXCIsIGZsYWc6IFwi8J+Hs/Cfh6pcIiwgY29kZTogXCJORVwiLCBkaWFsX2NvZGU6IFwiKzIyN1wiIH0sXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCLwn4ez8J+HrFwiLCBjb2RlOiBcIk5HXCIsIGRpYWxfY29kZTogXCIrMjM0XCIgfSxcbiAgICB7IG5hbWU6IFwiTml1ZVwiLCBmbGFnOiBcIvCfh7Pwn4e6XCIsIGNvZGU6IFwiTlVcIiwgZGlhbF9jb2RlOiBcIis2ODNcIiB9LFxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcIvCfh7Pwn4erXCIsIGNvZGU6IFwiTkZcIiwgZGlhbF9jb2RlOiBcIis2NzJcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgICBmbGFnOiBcIvCfh7Lwn4e1XCIsXG4gICAgICBjb2RlOiBcIk1QXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzE2NzBcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJOb3J3YXlcIiwgZmxhZzogXCLwn4ez8J+HtFwiLCBjb2RlOiBcIk5PXCIsIGRpYWxfY29kZTogXCIrNDdcIiB9LFxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwi8J+HtPCfh7JcIiwgY29kZTogXCJPTVwiLCBkaWFsX2NvZGU6IFwiKzk2OFwiIH0sXG4gICAgeyBuYW1lOiBcIlBha2lzdGFuXCIsIGZsYWc6IFwi8J+HtfCfh7BcIiwgY29kZTogXCJQS1wiLCBkaWFsX2NvZGU6IFwiKzkyXCIgfSxcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCLwn4e18J+HvFwiLCBjb2RlOiBcIlBXXCIsIGRpYWxfY29kZTogXCIrNjgwXCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlBhbGVzdGluaWFuIFRlcnJpdG9yeSwgT2NjdXBpZWRcIixcbiAgICAgIGZsYWc6IFwi8J+HtfCfh7hcIixcbiAgICAgIGNvZGU6IFwiUFNcIixcbiAgICAgIGRpYWxfY29kZTogXCIrOTcwXCIsXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwi8J+HtfCfh6ZcIiwgY29kZTogXCJQQVwiLCBkaWFsX2NvZGU6IFwiKzUwN1wiIH0sXG4gICAgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgZmxhZzogXCLwn4e18J+HrFwiLCBjb2RlOiBcIlBHXCIsIGRpYWxfY29kZTogXCIrNjc1XCIgfSxcbiAgICB7IG5hbWU6IFwiUGFyYWd1YXlcIiwgZmxhZzogXCLwn4e18J+HvlwiLCBjb2RlOiBcIlBZXCIsIGRpYWxfY29kZTogXCIrNTk1XCIgfSxcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcIvCfh7Xwn4eqXCIsIGNvZGU6IFwiUEVcIiwgZGlhbF9jb2RlOiBcIis1MVwiIH0sXG4gICAgeyBuYW1lOiBcIlBoaWxpcHBpbmVzXCIsIGZsYWc6IFwi8J+HtfCfh61cIiwgY29kZTogXCJQSFwiLCBkaWFsX2NvZGU6IFwiKzYzXCIgfSxcbiAgICB7IG5hbWU6IFwiUGl0Y2Fpcm5cIiwgZmxhZzogXCLwn4e18J+Hs1wiLCBjb2RlOiBcIlBOXCIsIGRpYWxfY29kZTogXCIrNjRcIiB9LFxuICAgIHsgbmFtZTogXCJQb2xhbmRcIiwgZmxhZzogXCLwn4e18J+HsVwiLCBjb2RlOiBcIlBMXCIsIGRpYWxfY29kZTogXCIrNDhcIiB9LFxuICAgIHsgbmFtZTogXCJQb3J0dWdhbFwiLCBmbGFnOiBcIvCfh7Xwn4e5XCIsIGNvZGU6IFwiUFRcIiwgZGlhbF9jb2RlOiBcIiszNTFcIiB9LFxuICAgIHsgbmFtZTogXCJQdWVydG8gUmljb1wiLCBmbGFnOiBcIvCfh7Xwn4e3XCIsIGNvZGU6IFwiUFJcIiwgZGlhbF9jb2RlOiBcIisxOTM5XCIgfSxcbiAgICB7IG5hbWU6IFwiUWF0YXJcIiwgZmxhZzogXCLwn4e28J+HplwiLCBjb2RlOiBcIlFBXCIsIGRpYWxfY29kZTogXCIrOTc0XCIgfSxcbiAgICB7IG5hbWU6IFwiUm9tYW5pYVwiLCBmbGFnOiBcIvCfh7fwn4e0XCIsIGNvZGU6IFwiUk9cIiwgZGlhbF9jb2RlOiBcIis0MFwiIH0sXG4gICAgeyBuYW1lOiBcIlJ1c3NpYVwiLCBmbGFnOiBcIvCfh7fwn4e6XCIsIGNvZGU6IFwiUlVcIiwgZGlhbF9jb2RlOiBcIis3XCIgfSxcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwi8J+Ht/Cfh7xcIiwgY29kZTogXCJSV1wiLCBkaWFsX2NvZGU6IFwiKzI1MFwiIH0sXG4gICAgeyBuYW1lOiBcIlJldW5pb25cIiwgZmxhZzogXCLwn4e38J+HqlwiLCBjb2RlOiBcIlJFXCIsIGRpYWxfY29kZTogXCIrMjYyXCIgfSxcbiAgICB7IG5hbWU6IFwiU2FpbnQgQmFydGhlbGVteVwiLCBmbGFnOiBcIvCfh6fwn4exXCIsIGNvZGU6IFwiQkxcIiwgZGlhbF9jb2RlOiBcIis1OTBcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gRGEgQ3VuaGFcIixcbiAgICAgIGZsYWc6IFwi8J+HuPCfh61cIixcbiAgICAgIGNvZGU6IFwiU0hcIixcbiAgICAgIGRpYWxfY29kZTogXCIrMjkwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxuICAgICAgZmxhZzogXCLwn4ew8J+Hs1wiLFxuICAgICAgY29kZTogXCJLTlwiLFxuICAgICAgZGlhbF9jb2RlOiBcIisxODY5XCIsXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiU2FpbnQgTHVjaWFcIiwgZmxhZzogXCLwn4ex8J+HqFwiLCBjb2RlOiBcIkxDXCIsIGRpYWxfY29kZTogXCIrMTc1OFwiIH0sXG4gICAgeyBuYW1lOiBcIlNhaW50IE1hcnRpblwiLCBmbGFnOiBcIvCfh7Lwn4erXCIsIGNvZGU6IFwiTUZcIiwgZGlhbF9jb2RlOiBcIis1OTBcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLFxuICAgICAgZmxhZzogXCLwn4e18J+HslwiLFxuICAgICAgY29kZTogXCJQTVwiLFxuICAgICAgZGlhbF9jb2RlOiBcIis1MDhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixcbiAgICAgIGZsYWc6IFwi8J+Hu/Cfh6hcIixcbiAgICAgIGNvZGU6IFwiVkNcIixcbiAgICAgIGRpYWxfY29kZTogXCIrMTc4NFwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwi8J+HvPCfh7hcIiwgY29kZTogXCJXU1wiLCBkaWFsX2NvZGU6IFwiKzY4NVwiIH0sXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCLwn4e48J+HslwiLCBjb2RlOiBcIlNNXCIsIGRpYWxfY29kZTogXCIrMzc4XCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxuICAgICAgZmxhZzogXCLwn4e48J+HuVwiLFxuICAgICAgY29kZTogXCJTVFwiLFxuICAgICAgZGlhbF9jb2RlOiBcIisyMzlcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgZmxhZzogXCLwn4e48J+HplwiLCBjb2RlOiBcIlNBXCIsIGRpYWxfY29kZTogXCIrOTY2XCIgfSxcbiAgICB7IG5hbWU6IFwiU2VuZWdhbFwiLCBmbGFnOiBcIvCfh7jwn4ezXCIsIGNvZGU6IFwiU05cIiwgZGlhbF9jb2RlOiBcIisyMjFcIiB9LFxuICAgIHsgbmFtZTogXCJTZXJiaWFcIiwgZmxhZzogXCLwn4e38J+HuFwiLCBjb2RlOiBcIlJTXCIsIGRpYWxfY29kZTogXCIrMzgxXCIgfSxcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcIvCfh7jwn4eoXCIsIGNvZGU6IFwiU0NcIiwgZGlhbF9jb2RlOiBcIisyNDhcIiB9LFxuICAgIHsgbmFtZTogXCJTaWVycmEgTGVvbmVcIiwgZmxhZzogXCLwn4e48J+HsVwiLCBjb2RlOiBcIlNMXCIsIGRpYWxfY29kZTogXCIrMjMyXCIgfSxcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwi8J+HuPCfh6xcIiwgY29kZTogXCJTR1wiLCBkaWFsX2NvZGU6IFwiKzY1XCIgfSxcbiAgICB7IG5hbWU6IFwiU2xvdmFraWFcIiwgZmxhZzogXCLwn4e48J+HsFwiLCBjb2RlOiBcIlNLXCIsIGRpYWxfY29kZTogXCIrNDIxXCIgfSxcbiAgICB7IG5hbWU6IFwiU2xvdmVuaWFcIiwgZmxhZzogXCLwn4e48J+HrlwiLCBjb2RlOiBcIlNJXCIsIGRpYWxfY29kZTogXCIrMzg2XCIgfSxcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwi8J+HuPCfh6dcIiwgY29kZTogXCJTQlwiLCBkaWFsX2NvZGU6IFwiKzY3N1wiIH0sXG4gICAgeyBuYW1lOiBcIlNvbWFsaWFcIiwgZmxhZzogXCLwn4e48J+HtFwiLCBjb2RlOiBcIlNPXCIsIGRpYWxfY29kZTogXCIrMjUyXCIgfSxcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwi8J+Hv/Cfh6ZcIiwgY29kZTogXCJaQVwiLCBkaWFsX2NvZGU6IFwiKzI3XCIgfSxcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCLwn4e48J+HuFwiLCBjb2RlOiBcIlNTXCIsIGRpYWxfY29kZTogXCIrMjExXCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXG4gICAgICBmbGFnOiBcIvCfh6zwn4e4XCIsXG4gICAgICBjb2RlOiBcIkdTXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzUwMFwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIlNwYWluXCIsIGZsYWc6IFwi8J+HqvCfh7hcIiwgY29kZTogXCJFU1wiLCBkaWFsX2NvZGU6IFwiKzM0XCIgfSxcbiAgICB7IG5hbWU6IFwiU3JpIExhbmthXCIsIGZsYWc6IFwi8J+HsfCfh7BcIiwgY29kZTogXCJMS1wiLCBkaWFsX2NvZGU6IFwiKzk0XCIgfSxcbiAgICB7IG5hbWU6IFwiU3VkYW5cIiwgZmxhZzogXCLwn4e48J+HqVwiLCBjb2RlOiBcIlNEXCIsIGRpYWxfY29kZTogXCIrMjQ5XCIgfSxcbiAgICB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgZmxhZzogXCLwn4e48J+Ht1wiLCBjb2RlOiBcIlNSXCIsIGRpYWxfY29kZTogXCIrNTk3XCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIixcbiAgICAgIGZsYWc6IFwi8J+HuPCfh69cIixcbiAgICAgIGNvZGU6IFwiU0pcIixcbiAgICAgIGRpYWxfY29kZTogXCIrNDdcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJFc3dhdGluaVwiLCBmbGFnOiBcIvCfh7jwn4e/XCIsIGNvZGU6IFwiU1pcIiwgZGlhbF9jb2RlOiBcIisyNjhcIiB9LFxuICAgIHsgbmFtZTogXCJTd2VkZW5cIiwgZmxhZzogXCLwn4e48J+HqlwiLCBjb2RlOiBcIlNFXCIsIGRpYWxfY29kZTogXCIrNDZcIiB9LFxuICAgIHsgbmFtZTogXCJTd2l0emVybGFuZFwiLCBmbGFnOiBcIvCfh6jwn4etXCIsIGNvZGU6IFwiQ0hcIiwgZGlhbF9jb2RlOiBcIis0MVwiIH0sXG4gICAgeyBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIGZsYWc6IFwi8J+HuPCfh75cIiwgY29kZTogXCJTWVwiLCBkaWFsX2NvZGU6IFwiKzk2M1wiIH0sXG4gICAgeyBuYW1lOiBcIlRhaXdhblwiLCBmbGFnOiBcIvCfh7nwn4e8XCIsIGNvZGU6IFwiVFdcIiwgZGlhbF9jb2RlOiBcIis4ODZcIiB9LFxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwi8J+HufCfh69cIiwgY29kZTogXCJUSlwiLCBkaWFsX2NvZGU6IFwiKzk5MlwiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mIFRhbnphbmlhXCIsXG4gICAgICBmbGFnOiBcIvCfh7nwn4e/XCIsXG4gICAgICBjb2RlOiBcIlRaXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzI1NVwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIlRoYWlsYW5kXCIsIGZsYWc6IFwi8J+HufCfh61cIiwgY29kZTogXCJUSFwiLCBkaWFsX2NvZGU6IFwiKzY2XCIgfSxcbiAgICB7IG5hbWU6IFwiVGltb3ItTGVzdGVcIiwgZmxhZzogXCLwn4e58J+HsVwiLCBjb2RlOiBcIlRMXCIsIGRpYWxfY29kZTogXCIrNjcwXCIgfSxcbiAgICB7IG5hbWU6IFwiVG9nb1wiLCBmbGFnOiBcIvCfh7nwn4esXCIsIGNvZGU6IFwiVEdcIiwgZGlhbF9jb2RlOiBcIisyMjhcIiB9LFxuICAgIHsgbmFtZTogXCJUb2tlbGF1XCIsIGZsYWc6IFwi8J+HufCfh7BcIiwgY29kZTogXCJUS1wiLCBkaWFsX2NvZGU6IFwiKzY5MFwiIH0sXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwi8J+HufCfh7RcIiwgY29kZTogXCJUT1wiLCBkaWFsX2NvZGU6IFwiKzY3NlwiIH0sXG4gICAgeyBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgZmxhZzogXCLwn4e58J+HuVwiLCBjb2RlOiBcIlRUXCIsIGRpYWxfY29kZTogXCIrMTg2OFwiIH0sXG4gICAgeyBuYW1lOiBcIlR1bmlzaWFcIiwgZmxhZzogXCLwn4e58J+Hs1wiLCBjb2RlOiBcIlROXCIsIGRpYWxfY29kZTogXCIrMjE2XCIgfSxcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwi8J+HufCfh7dcIiwgY29kZTogXCJUUlwiLCBkaWFsX2NvZGU6IFwiKzkwXCIgfSxcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwi8J+HufCfh7JcIiwgY29kZTogXCJUTVwiLCBkaWFsX2NvZGU6IFwiKzk5M1wiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIixcbiAgICAgIGZsYWc6IFwi8J+HufCfh6hcIixcbiAgICAgIGNvZGU6IFwiVENcIixcbiAgICAgIGRpYWxfY29kZTogXCIrMTY0OVwiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcIvCfh7nwn4e7XCIsIGNvZGU6IFwiVFZcIiwgZGlhbF9jb2RlOiBcIis2ODhcIiB9LFxuICAgIHsgbmFtZTogXCJVZ2FuZGFcIiwgZmxhZzogXCLwn4e68J+HrFwiLCBjb2RlOiBcIlVHXCIsIGRpYWxfY29kZTogXCIrMjU2XCIgfSxcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcIvCfh7rwn4emXCIsIGNvZGU6IFwiVUFcIiwgZGlhbF9jb2RlOiBcIiszODBcIiB9LFxuICAgIHsgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBmbGFnOiBcIvCfh6bwn4eqXCIsIGNvZGU6IFwiQUVcIiwgZGlhbF9jb2RlOiBcIis5NzFcIiB9LFxuICAgIHsgbmFtZTogXCJVbml0ZWQgS2luZ2RvbVwiLCBmbGFnOiBcIvCfh6zwn4enXCIsIGNvZGU6IFwiR0JcIiwgZGlhbF9jb2RlOiBcIis0NFwiIH0sXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXNcIiwgZmxhZzogXCLwn4e68J+HuFwiLCBjb2RlOiBcIlVTXCIsIGRpYWxfY29kZTogXCIrMVwiIH0sXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCLwn4e68J+HvlwiLCBjb2RlOiBcIlVZXCIsIGRpYWxfY29kZTogXCIrNTk4XCIgfSxcbiAgICB7IG5hbWU6IFwiVXpiZWtpc3RhblwiLCBmbGFnOiBcIvCfh7rwn4e/XCIsIGNvZGU6IFwiVVpcIiwgZGlhbF9jb2RlOiBcIis5OThcIiB9LFxuICAgIHsgbmFtZTogXCJWYW51YXR1XCIsIGZsYWc6IFwi8J+Hu/Cfh7pcIiwgY29kZTogXCJWVVwiLCBkaWFsX2NvZGU6IFwiKzY3OFwiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YgVmVuZXp1ZWxhXCIsXG4gICAgICBmbGFnOiBcIvCfh7vwn4eqXCIsXG4gICAgICBjb2RlOiBcIlZFXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzU4XCIsXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiVmlldG5hbVwiLCBmbGFnOiBcIvCfh7vwn4ezXCIsIGNvZGU6IFwiVk5cIiwgZGlhbF9jb2RlOiBcIis4NFwiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLFxuICAgICAgZmxhZzogXCLwn4e78J+HrFwiLFxuICAgICAgY29kZTogXCJWR1wiLFxuICAgICAgZGlhbF9jb2RlOiBcIisxMjg0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsXG4gICAgICBmbGFnOiBcIvCfh7vwn4euXCIsXG4gICAgICBjb2RlOiBcIlZJXCIsXG4gICAgICBkaWFsX2NvZGU6IFwiKzEzNDBcIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcIvCfh7zwn4erXCIsIGNvZGU6IFwiV0ZcIiwgZGlhbF9jb2RlOiBcIis2ODFcIiB9LFxuICAgIHsgbmFtZTogXCJZZW1lblwiLCBmbGFnOiBcIvCfh77wn4eqXCIsIGNvZGU6IFwiWUVcIiwgZGlhbF9jb2RlOiBcIis5NjdcIiB9LFxuICAgIHsgbmFtZTogXCJaYW1iaWFcIiwgZmxhZzogXCLwn4e/8J+HslwiLCBjb2RlOiBcIlpNXCIsIGRpYWxfY29kZTogXCIrMjYwXCIgfSxcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCLwn4e/8J+HvFwiLCBjb2RlOiBcIlpXXCIsIGRpYWxfY29kZTogXCIrMjYzXCIgfSxcbiAgXTtcbiAgY29uc29sZS5sb2coY291bnRyaWVzQXJyYXkpO1xuXG4gIGlmICghd2luZG93LmNvZGUpIHtcbiAgICB3aW5kb3cuY29kZSA9IFwiKzdcIjtcbiAgfVxuXG4gIGNvbnN0IGZha2VzZWxlY3Rib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1pdGVtc1wiKTtcbiAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWN0XCIpO1xuICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZS1yb3dcIik7XG5cbiAgY29uc3Qgb3B0aW9uTW9kYWwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhY3QtbW9kYWxcIik7XG4gIGNvbnN0IG9wdGlvbk1vZGFsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmUtcm93LW1vZGFsXCIpO1xuXG4gIGxldCBhY3RpdmVTb2NpYWxNZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LXNlbGVjdGVkXCIpLmlubmVySFRNTDtcblxuICBmYWtlc2VsZWN0Ym94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbiAgICBhY3RpdmVTb2NpYWxNZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LXNlbGVjdGVkXCIpLmlubmVySFRNTDtcbiAgICBpZiAoYWN0aXZlU29jaWFsTWVkaWEgPT09IFwiRW1haWxcIikge1xuICAgICAgb3B0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBvcHRpb24yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBvcHRpb24yLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNvdW50cnljb2RlKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGlmIChcbiAgICAgICFkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgJHtpZCA9PT0gXCJjb3VudHJ5Y29kZVwiID8gXCIjc2VhcmNoY29kZVwiIDogXCIjc2VhcmNoY29kZS1tb2RhbFwifWBcbiAgICAgICAgKVxuICAgICAgICAuY29udGFpbnMoZS50YXJnZXQpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrMlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50cnljb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIpKTtcbiAgICAgIGNvbnN0IGNvdW50cnljb2RlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgJHtcbiAgICAgICAgICBpZCA9PT0gXCJjb3VudHJ5Y29kZVwiXG4gICAgICAgICAgICA/IFwiI2NvdW50cnljb2RlLXNlbGVjdG9yXCJcbiAgICAgICAgICAgIDogXCIjY291bnRyeWNvZGUtc2VsZWN0b3ItbW9kYWxcIlxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICAgIGlmIChjb3VudHJ5Y29kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiKSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGNvdW50cnljb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgY291bnRyeWNvZGVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCR7XG4gICAgICAgICAgICBpZCA9PT0gXCJjb3VudHJ5Y29kZVwiID8gXCIjY291bnRyaWVzLWxpc3RcIiA6IFwiI2NvdW50cmllcy1saXN0LW1vZGFsXCJcbiAgICAgICAgICB9YFxuICAgICAgICApO1xuICAgICAgICBsZXQgaHRtbCA9IFwiXCI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvdW50cnkgPSBjb3VudHJpZXNBcnJheVtpXTtcbiAgICAgICAgICBodG1sICs9XG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvdW50cnlcIiBkYXRhLWNvZGU9XCInICtcbiAgICAgICAgICAgIGNvdW50cnkuY29kZSArXG4gICAgICAgICAgICAnXCI+PHNwYW4+JyArXG4gICAgICAgICAgICBjb3VudHJ5LmZsYWcgK1xuICAgICAgICAgICAgXCI8L3NwYW4+PHNwYW4+XCIgK1xuICAgICAgICAgICAgY291bnRyeS5uYW1lICtcbiAgICAgICAgICAgIFwiPC9zcGFuPjxzcGFuPlwiICtcbiAgICAgICAgICAgIGNvdW50cnkuZGlhbF9jb2RlICtcbiAgICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PlwiO1xuICAgICAgICB9XG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICBjb25zdCBjb3VudHJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvdW50cnlcIik7XG4gICAgICAgIGNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XG4gICAgICAgICAgY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY291bnRyeS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvZGVcIikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY291bnRyeSk7XG4gICAgICAgICAgICBjb25zdCBkaWFsQ29kZSA9XG4gICAgICAgICAgICAgIGNvdW50cnkuY2hpbGROb2Rlc1tjb3VudHJ5LmNoaWxkTm9kZXMubGVuZ3RoIC0gMV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGlhbENvZGUpO1xuXG4gICAgICAgICAgICB3aW5kb3cuY29kZSA9IGRpYWxDb2RlO1xuXG4gICAgICAgICAgICAvLyB2YXIgaXNUb2dnbGVDb250cnkgPSB0cnVlO1xuICAgICAgICAgICAgY291bnRyeWNvZGVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBjb25zdCBjaG9zZW5Db3VudHJ5ID0gY291bnRyaWVzQXJyYXkuZmluZChcbiAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY291bnRyeS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvZGVcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBpZCA9PT0gXCJjb3VudHJ5Y29kZVwiID8gXCIjY291bnRyeS12YWx1ZVwiIDogXCIjY291bnRyeS12YWx1ZS1tb2RhbFwiXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICApLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIGlkID09PSBcImNvdW50cnljb2RlXCJcbiAgICAgICAgICAgICAgICAgID8gJzxzcGFuIGlkPVwiZmxhZ1wiPicgKyBjaG9zZW5Db3VudHJ5LmZsYWcgKyBcIjwvc3Bhbj5cIlxuICAgICAgICAgICAgICAgICAgOiAnPHNwYW4gaWQ9XCJmbGFnLW1vZGFsbW9kYWxcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuQ291bnRyeS5mbGFnICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+XCJcbiAgICAgICAgICAgICAgfWAgK1xuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBpZCA9PT0gXCJjb3VudHJ5Y29kZVwiXG4gICAgICAgICAgICAgICAgICA/ICc8c3BhbiBpZD1cImRpYWxjb2RlXCI+JyArIGNob3NlbkNvdW50cnkuZGlhbF9jb2RlICsgXCI8L3NwYW4+XCJcbiAgICAgICAgICAgICAgICAgIDogJzxzcGFuIGlkPVwiZGlhbGNvZGUtbW9kYWxcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuQ291bnRyeS5kaWFsX2NvZGUgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIlxuICAgICAgICAgICAgICB9YDtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgaWQgPT09IFwiY291bnRyeWNvZGVcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiI2NvdW50cnktdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiI2NvdW50cnktdmFsdWUtbW9kYWxcIlxuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgY2hvc2VuQ291bnRyeS5jb2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudHJ5Y29kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICBjb3VudHJ5Y29kZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgJHtpZCA9PT0gXCJjb3VudHJ5Y29kZVwiID8gXCIjc2VhcmNoY29kZVwiIDogXCIjc2VhcmNoY29kZS1tb2RhbFwifWBcbiAgICAgICAgKS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY291bnRyeWNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnljb2RlXCIpO1xuICBjb25zdCBjb3VudHJ5Y29kZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5Y29kZS1tb2RhbFwiKTtcblxuICBjb3VudHJ5Y29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUNvdW50cnljb2RlKGUpKTtcbiAgY291bnRyeWNvZGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGhhbmRsZUNvdW50cnljb2RlKGUpKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuXG4gICAgaWYgKGlkID09PSBcImNvdW50cnljb2RlXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5Y29kZS1zZWxlY3RvclwiKSAmJlxuICAgICAgICAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5Y29kZVwiKS5jb250YWlucyhlLnRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb3VudHJ5Y29kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnljb2RlLXNlbGVjdG9yXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hjb2RlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnljb2RlLXNlbGVjdG9yLW1vZGFsXCIpICYmXG4gICAgICAgICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnljb2RlLW1vZGFsXCIpLmNvbnRhaW5zKGUudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGNvdW50cnljb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeWNvZGUtc2VsZWN0b3ItbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoY29kZS1tb2RhbFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2hDb2RlKGUpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAke2lkID09PSBcInNlYXJjaGNvZGVcIiA/IFwiI2NvdW50cmllcy1saXN0XCIgOiBcIiNjb3VudHJpZXMtbGlzdC1tb2RhbFwifWBcbiAgICAgICk7XG4gICAgICBsZXQgaHRtbCA9IFwiXCI7XG4gICAgICBjb25zdCBuZXdBcnJheSA9IGNvdW50cmllc0FycmF5LmZpbHRlcihcbiAgICAgICAgKGNvdW50cnkpID0+XG4gICAgICAgICAgY291bnRyeS5jb2RlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGNvdW50cnkuZGlhbF9jb2RlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY291bnRyeSA9IG5ld0FycmF5W2ldO1xuICAgICAgICBodG1sICs9XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb3VudHJ5XCIgZGF0YS1jb2RlPVwiJyArXG4gICAgICAgICAgY291bnRyeS5jb2RlICtcbiAgICAgICAgICAnXCI+PHNwYW4+JyArXG4gICAgICAgICAgY291bnRyeS5mbGFnICtcbiAgICAgICAgICBcIjwvc3Bhbj48c3Bhbj5cIiArXG4gICAgICAgICAgY291bnRyeS5uYW1lICtcbiAgICAgICAgICBcIjwvc3Bhbj48c3Bhbj5cIiArXG4gICAgICAgICAgY291bnRyeS5kaWFsX2NvZGUgK1xuICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PlwiO1xuICAgICAgfVxuICAgICAgbGlzdC5pbm5lckhUTUwgPSBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCR7aWQgPT09IFwic2VhcmNoY29kZVwiID8gXCIjY291bnRyaWVzLWxpc3RcIiA6IFwiI2NvdW50cmllcy1saXN0LW1vZGFsXCJ9YFxuICAgICAgKTtcbiAgICAgIGxldCBodG1sID0gXCJcIjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb3VudHJ5ID0gY291bnRyaWVzQXJyYXlbaV07XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvdW50cnlcIiBkYXRhLWNvZGU9XCInICtcbiAgICAgICAgICBjb3VudHJ5LmNvZGUgK1xuICAgICAgICAgICdcIj48c3Bhbj4nICtcbiAgICAgICAgICBjb3VudHJ5LmZsYWcgK1xuICAgICAgICAgIFwiPC9zcGFuPjxzcGFuPlwiICtcbiAgICAgICAgICBjb3VudHJ5Lm5hbWUgK1xuICAgICAgICAgIFwiPC9zcGFuPjxzcGFuPlwiICtcbiAgICAgICAgICBjb3VudHJ5LmRpYWxfY29kZSArXG4gICAgICAgICAgXCI8L3NwYW4+PC9kaXY+XCI7XG4gICAgICB9XG4gICAgICBsaXN0LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxuXG4gICAgY29uc3QgY291bnRyeWNvZGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgJHtcbiAgICAgICAgaWQgPT09IFwic2VhcmNoY29kZVwiXG4gICAgICAgICAgPyBcIiNjb3VudHJ5Y29kZS1zZWxlY3RvclwiXG4gICAgICAgICAgOiBcIiNjb3VudHJ5Y29kZS1zZWxlY3Rvci1tb2RhbFwiXG4gICAgICB9YFxuICAgICk7XG4gICAgY29uc3QgY291bnRyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3VudHJ5XCIpO1xuICAgIGNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XG4gICAgICBjb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50cnkuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2RlXCIpKTtcbiAgICAgICAgY291bnRyeWNvZGVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnN0IGNob3NlbkNvdW50cnkgPSBjb3VudHJpZXNBcnJheS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvdW50cnkuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2RlXCIpXG4gICAgICAgICk7XG4gICAgICAgIHdpbmRvdy5jb2RlID0gY2hvc2VuQ291bnRyeS5kaWFsX2NvZGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCR7aWQgPT09IFwic2VhcmNoY29kZVwiID8gXCIjY291bnRyeS12YWx1ZVwiIDogXCIjY291bnRyeS12YWx1ZS1tb2RhbFwifWBcbiAgICAgICAgKS5pbm5lckhUTUwgPVxuICAgICAgICAgIGAke1xuICAgICAgICAgICAgaWQgPT09IFwic2VhcmNoY29kZVwiXG4gICAgICAgICAgICAgID8gJzxzcGFuIGlkPVwiZmxhZ1wiPicgKyBjaG9zZW5Db3VudHJ5LmZsYWcgKyBcIjwvc3Bhbj4gXCJcbiAgICAgICAgICAgICAgOiAnPHNwYW4gaWQ9XCJmbGFnLW1vZGFsXCI+JyArIGNob3NlbkNvdW50cnkuZmxhZyArIFwiPC9zcGFuPiBcIlxuICAgICAgICAgIH1gICtcbiAgICAgICAgICBgJHtcbiAgICAgICAgICAgIGlkID09PSBcInNlYXJjaGNvZGVcIlxuICAgICAgICAgICAgICA/ICc8c3BhbiBpZD1cImRpYWxjb2RlXCI+JyArIGNob3NlbkNvdW50cnkuZGlhbF9jb2RlICsgXCI8L3NwYW4+IFwiXG4gICAgICAgICAgICAgIDogJzxzcGFuIGlkPVwiZGlhbGNvZGUtbW9kYWxcIj4nICtcbiAgICAgICAgICAgICAgICBjaG9zZW5Db3VudHJ5LmRpYWxfY29kZSArXG4gICAgICAgICAgICAgICAgXCI8L3NwYW4+IFwiXG4gICAgICAgICAgfWA7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAke2lkID09PSBcInNlYXJjaGNvZGVcIiA/IFwiI2NvdW50cnktdmFsdWVcIiA6IFwiI2NvdW50cnktdmFsdWUtbW9kYWxcIn1gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIGNob3NlbkNvdW50cnkuY29kZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGNvZGVcIik7XG4gIGNvbnN0IHNlYXJjaGNvZGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoY29kZS1tb2RhbFwiKTtcblxuICBzZWFyY2hjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4gaGFuZGxlU2VhcmNoQ29kZShlKSk7XG4gIHNlYXJjaGNvZGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IGhhbmRsZVNlYXJjaENvZGUoZSkpO1xufSk7XG4iXSwiZmlsZSI6ImNvdW50cnktc2VsZWN0b3IuanMifQ==
