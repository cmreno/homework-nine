var homeContent = `<h1>HOME</h1>
<div class="body">
  <div class="images img1"></div>
  <div class="content">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
  minus cumque autem et tenetur perferendis ipsam quaerat corrupti nisi
  excepturi nostrum mollitia modi deserunt, voluptas enim praesentium
  natus officiis maiores laborum maxime quod ipsum. Enim, dolores animi?
  Officiis, sequi. Velit molestiae dolorem nisi modi? Distinctio dicta
  vel sequi consectetur recusandae aut facere, repellendus fugiat
  voluptates? Repellendus, dolorum perspiciatis fuga rerum molestiae,
  expedita id veritatis facilis enim maxime ratione, aut corrupti iste
  tempora saepe dolores qui harum ab fugit doloribus. Nam accusamus
  aliquid commodi officiis quis architecto quae aut esse inventore vel
  perspiciatis dignissimos facilis dolorum nesciunt hic, reiciendis fuga
  provident.
  </div>
</div>`;
var aboutContent = `<h1>ABOUT</h1>
<div class="body">
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      nulla est provident debitis, quas maiores autem iure libero ut
      numquam vero aliquid vel ad. Tempora odio voluptate deleniti beatae
      non!
    </p>
    <p>
      Suscipit eos, nihil similique veniam consectetur officiis iusto
      quasi nesciunt magni totam dignissimos ab corporis adipisci libero
      sunt praesentium ducimus ex accusantium quae voluptatibus, neque
      nobis! Iste, velit nobis? Minima?
    </p>
    <p>
      Rerum aspernatur saepe asperiores iure et magnam voluptatibus ex
      aperiam aut dignissimos reprehenderit repellendus consequuntur
      molestiae adipisci animi, maxime eligendi, cupiditate harum, labore
      at ullam temporibus. Enim illum asperiores eaque.
    </p>
  </div>
  <div class="images img2"></div>
</div>`;
var productsContent = `<h1>PRODUCTS</h1>
<div class="body">
  <!-- <div class="content">
  </div> -->
  <div class="images img2"></div>
  <div class="images img1"></div>
  <div class="images img3"></div>
</div>
<div class="info">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
  minima rerum amet magni repellendus nesciunt rem recusandae corporis
  incidunt dicta optio quam, quidem quis mollitia!
</div>`;
var contactContent = `<h1>CONTACT</h1>
<div class="contact">
  <input type="text" name="Name" id="Name" placeholder="Name" />
  <input
    type="tel"
    name="Telephone"
    id="Telephone"
    placeholder="Phone Number"
  />
  <input
    type="text"
    name="Email"
    id="Email"
    placeholder="Email Address"
  />
  <textarea
    name="Comments"
    id="Comments"
    cols="30"
    rows="10"
    placeholder="Comments"
  ></textarea>
  <input type="button" value="Submit" />
</div>`;

export function home() {
  return homeContent;
}
export function about() {
  return aboutContent;
}
export function products() {
  return productsContent;
}
export function contact() {
  return contactContent;
}
