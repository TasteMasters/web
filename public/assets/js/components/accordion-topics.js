export default async function accordionTopics(contentWorkshop, topic) {
  const accordionTopic = document.createElement("div");
  accordionTopic.className = "accordion-item";

  const divHeaderTopic = document.createElement("div");
  divHeaderTopic.className = "div-header-topic";

  const titleAccordion = document.createElement("h3");
  titleAccordion.innerText = topic.title;
  divHeaderTopic.appendChild(titleAccordion);

  // Estimated time and accordion interaction image
  const div = document.createElement("div");

  let time = "";

  const minutes = Number(topic.estimated_time) % 60;
  const hours = (Number(topic.estimated_time) - minutes) / 60;

  if (hours < 1) {
    const result = `${minutes} minutos`;
    time = result;
  }

  if (hours === 1) {
    const result = `${hours} hora e ${minutes} minutos`;
    time = result;
  }

  if (hours > 1) {
    const result = `${hours} horas e ${minutes} minutos`;
    time = result;
  }

  const p = document.createElement("p");
  p.innerText = time;
  div.appendChild(p);

  const img = document.createElement("img");
  img.src = "/assets/img/open-ws.svg";
  img.className = "image-ws";
  div.appendChild(img);

  divHeaderTopic.appendChild(div);
  accordionTopic.appendChild(divHeaderTopic);

  const contentAcordion = document.createElement("div");
  contentAcordion.className = "content-accordion";
  accordionTopic.appendChild(contentAcordion);

  const divContent = document.createElement("div");
  divContent.className = "content-topic";
  contentAcordion.appendChild(divContent);

  const descriptionTopic = document.createElement("p");
  descriptionTopic.innerText = topic.description;
  divContent.appendChild(descriptionTopic);

  if (topic.video_link !== "") {
    const iframe = document.createElement("iframe");
    iframe.src = topic.video_link;
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    divContent.appendChild(iframe);
  }

  contentWorkshop.appendChild(accordionTopic);
}
