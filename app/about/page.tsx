import Image from "next/image";
import Logo from "../ui/logo";

export default function Page() {
  return (
    <main className="grid grid-cols-6 h-[75vh] overflow-hidden">
      <section className="col-span-2 text-center sticky top-0 p-12">
        <Image
          src="/Profile-Pic_Square.jpeg"
          width={250}
          height={250}
          alt=""
          className="mx-auto rounded-md shadow-[-5px_10px_20px_black]"
        />
        <h3 className="text-4xl font-extrabold my-4">Mark Satin</h3>
        <p className="text-xl">Software Engineer | Photographer</p>
        <form className="border-2 border-black min-h-[300px] mt-6">Contact Form</form>
      </section>
      <section className="col-span-4 overflow-auto pl-8 pr-32">
        <h2 className="text-[2rem] font-extrabold my-3">About Me</h2>
        <p className="text-lg">
          When the pandemic hit New York City in March 2020 I had just rediscovered my love for film
          photography. Armed with a couple of cameras and a glut of free time I began crisscrossing
          the city’s deserted neighborhoods in search of interesting subject matter and a way to
          kill time. Trying to pull something out of my own feelings of helplessness I experimented
          with any film stock I could get my hands on. I shot color and black and white. I shot
          slide film. I started using filters, flash, and lots of different lenses. I didn’t know it
          but I was putting myself through a massive postgraduate program in photography. In the
          first three months of the pandemic I shot 42 rolls of film: 1,512 carefully composed
          photos on 35mm.
          <br />
          <br />
          Pretty quickly I realized that I wasn't just working through my own struggles - I was
          documenting major historical turbulence on the daily. I shot NYC through the lockdown,
          during the initial lifting of restrictions and their many reintroductions, during the
          protests for George Floyd and the vigils for Breonna Taylor, the looting in SoHo and so
          much more.
          <br />
          <br />
          Then I moved beyond the city. I got in the car and drove, photographing my way through
          forests, plains, and deserts all across the country. I hiked national and state parks,
          climbed mountains, and camped in the backcountry. I explored forgotten towns, and trekked
          through American cities I never actually thought I’d see. In that five week trip I shot
          another 22 rolls of film.
          <br />
          <br />
          Traveling alone on the road offers a lot of time for reflection, and it had become clear
          to me that I had been restless for a while - even before Covid arrived. I had just turned
          thirty and I was hungry for a career that would keep me just as engaged as the previous
          nine months had. And I wanted to combine my passion for making and studying art with my
          desire to build something new and exciting. But what could glue those two things together?
          <br />
          <br />
          Enter the internet.
          <br />
          <br />
          One day my uncle suggested I take a look at Harvard’s CS50x, a free and online version of
          David J. Malan’s famous undergrad computer science course. And the rest is history. By the
          end of the second lecture I was hooked. It’s crazy but it really was that simple and that
          fast for me. Design, structure, and problem-solving modules taught me to think like an
          engineer and paved the way for full-stack web development. I completed the program and
          received my certificate. I moved deeper and deeper into web design, climbing from
          server-side templating languages to Single Page Applications to containerized
          microservices and back around to React Server Components, all the while iterating on what
          I had learned before, just as I had done with photography the previous year.
          <br />
          <br />
          At the same time I had graduated to the next level of my photography practice: medium
          format film. 6x7 film has nearly five times the surface area of 35mm, allowing me to
          capture nearly five times more composition without being forced to distort the image with
          a wide angle lens. It’s also a helluva lot sharper and produces exponentially more colors
          than its kid brother can. Combined with everything I was learning in my ad-hoc coding
          bootcamp, it felt as if both my eyes and my brain were expanding.
          <br />
          <br />
          When it became clear that I was going to lasso my different pursuits into one portfolio I
          began brainstorming words and phrases that could encapsulate exactly what it is I have to
          offer. I reflected on my love of learning in and out of the classroom, and of trying new
          things and becoming empowered in pursuing new experiences, as well my boundless love for
          art and visual design. Returning from a trip to the Adirondacks one summer I eagerly
          developed my film and was deeply moved by the ethereal beauty of a waterfall I had
          photographed on Mt. Algonquin. With this feeling lodged in my brain it wasn’t long before
          a new portmanteau was born: Autodidack, the union of a self-motivated learner seeking
          solace, knowledge, and epiphany in nature.
          <br />
          <br />
        </p>
        <h2 className="text-[2rem] font-extrabold my-3">About the Photography</h2>
        <p className="text-lg">
          When people ask me what kinds of photos I take I always take a pause because the answer
          isn’t so straightforward. I find that I’m always pulling the past behind me as I move into
          new phases of my work. What came before never really wants to let go. If you take a quick
          glance through my instagram you’ll see lots and lots of empty spaces, but scroll back
          farther and you’ll see a few years worth of portraits. Not to mention the occasional
          editorial or street series peppered in. The truth is I’m not closed off to any concept,
          and this, combined with the art-adjacent nature of Medium Format photography, has
          sometimes landed me with the label of Fine Art Photographer. But I don’t like that label
          so much – too stuffy and just as ambiguous as my initial pause.
          <br />
          <br />
          So to narrow it down a bit….
          <br />
          <br />
        </p>
        <ul>
          <li>
            I love celluloid. Especially slide film. I shoot and develop all of the photography you
            see here plus digitize everything with my Epson Perfection V800 Photo scanner.
            Everything is painstakingly organized in Lightroom while color correction and cleaning
            is done in Photoshop.
          </li>
          <li>
            I love nature, hiking, camping, road trips…. but I’m just as much in love with the city.
            I’ve lived in NYC for over a decade and don’t see myself leaving anytime soon. I do
            enjoy taking trips out whenever possible.
          </li>
          <li>
            I’m obsessed with geometric compositions. I often spend upwards of an hour on each shot
            and much of that time is spent adjusting the camera a few micrometers here and there to
            get the absolute perfect angle to my shots.
          </li>
        </ul>
        <br />
        <br />
        <h2 className="text-[2rem] font-extrabold my-3">About the Site</h2>
        <p className="text-lg">
          This portfolio is a full-stack web application built with Next.js 13 (React/TypeScript
          under the hood) and a Supabase backend (w/ a PostgreSQL database). Styles and layout are
          handled with Tailwind. I diagrammed the original component flow and designed some UI
          mockups in Figma. And that’s it!
          <br />
          <br />
        </p>
      </section>
    </main>
  );
}
