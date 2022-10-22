const SIDEBAR_LINK = [{
    heading: 'OVERVIEW',
    links: [{
            link: '/dashboard',
            text: 'System Overview'
        },
        {
            link: '/zone-overview',
            text: 'Zone Overview'
        },
        {
            link: '/illuminance-sensor',
            text: 'Illuminance Report'
        },
        {
            link: '/maps-view',
            text: 'Device Maps'
        }
    ]
}, {
    heading: 'CONTROL',
    links: [{
        link: '/per-device-control',
        text: 'Per Device Control'
    },{
        link: '/#',
        text: 'Per Zone Control'
    }]
},{
    heading: 'IoT Sensors',
    links: [{
        link: '/iot-sensors',
        text: 'Sensor Record'
    }]
},{
    heading: 'SYSTEM STATUS',
    links: [{
        link: '/device-connection',
        text: 'Gateway Status'
    },
    {
        link: '#',
        text: 'Device Events'
    },
    {
        link: '/service-status', 
        text: 'CMS Services Status'
    }]
}];

function sidebar_link(hreflink, text) {
    return '<li class="nav-item"><a class="nav-link py-0" href="' + hreflink + '">' + text + '</a></li>';
}

function sidebar_division(sidebar_heading, sidebar_links) {
    var sidebar_div =
        `<h6 class = "sidebar-heading d-flex justify-content-between align-items-center px-3 mt-3 text-muted">
            <span>${sidebar_heading}</span></h6>
            <ul class = "nav flex-column mb-0">`;
    for (const element of sidebar_links) {
        sidebar_div += sidebar_link(element.link, element.text);
    }
    sidebar_div += `</ul>`;
    return sidebar_div;
}

function footer() {
    return `<ul class="nav flex-column mt-3 justify-content-between">
        <li class="nav-item nav-link smallest-font text-muted">
        &copy; 2022 SIIT, Thammasat University. Supported by Thammasat University and Thailand Science Research and Innovation Fundamental Fund, TUFF19/2564 and TUFF24/2565<br/></span>
        </li>
    </ul>`;
}

function sidebar_main() {
    var navMenu = $("#sidebarMenu");
    for (const element of SIDEBAR_LINK) {
        navMenu.append(sidebar_division(element.heading, element.links));
    }
    navMenu.append(footer());
}

$(document).ready(sidebar_main);