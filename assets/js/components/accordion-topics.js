export default async function accordionTopics(contentWorkshop, topic) {
    const accordionTopic = document.createElement('div');
    accordionTopic.className = 'accordion-item';

    const divHeaderTopic = document.createElement('div')
    divHeaderTopic.className = 'div-header-topic';
    
    const titleAccordion = document.createElement('h3');
    titleAccordion.innerText = topic.topic_title;
    divHeaderTopic.appendChild(titleAccordion);

    // Estimated time and accordion interaction image
    const div = document.createElement('div');

    const p = document.createElement('p');
    p.innerText = topic.estimated_time;
    div.appendChild(p);

    const img = document.createElement('img');
    img.src = 'assets/img/open-ws.svg';
    img.className = 'image-ws';
    div.appendChild(img);

    divHeaderTopic.appendChild(div);
    accordionTopic.appendChild(divHeaderTopic);

    const contentAcordion = document.createElement('div');
    contentAcordion.className = 'content-accordion';
    accordionTopic.appendChild(contentAcordion);

    const divContent = document.createElement('div');
    divContent.className = 'content-topic';
    contentAcordion.appendChild(divContent);

    const descriptionTopic = document.createElement('p');
    descriptionTopic.innerText = topic.topic_description;
    divContent.appendChild(descriptionTopic);

    if (topic.video_link !== '') {
        const iframe = document.createElement('iframe');
        iframe.src = topic.video_link;
        iframe.title = 'YouTube video player';
        iframe.allow = 'accelerometer';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        divContent.appendChild(iframe);
    }

    contentWorkshop.appendChild(accordionTopic);
};