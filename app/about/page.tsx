import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-6 h-[90vh] overflow-hidden">
      <div className="col-span-2 p-6 text-center sticky top-0">
        <Image src="/Profile-Pic_Square.jpeg" width={250} height={250} alt="" className="mx-auto" />
        <p className="text-3xl font-extrabold">Mark Satin</p>
        <p>Full-Stack Web Developer</p>
        <p>Designer | Photographer</p>
        <form className="border-2 border-black min-h-[300px] mt-6">Contact Form</form>
      </div>
      <div className="col-span-4 p-6 overflow-auto">
        <div>
          <h2 className="text-3xl font-extrabold">About The Site</h2>
          <p className="min-h-[200px]">
            When the pandemic struck NYC in March 2020 I was in the middle of my analog film
            rennaissance. Armed with a couple small cameras and a whole lot of free time I soon
            began crisscrossing the city’s deserted neighborhoods by train, bike, and foot in search
            of interesting subject matter. I shot any film stock I could get my hands on, used a all
            lengths of lenses, and introduced filters into my toolkit. I didn’t know it at the time
            but I was putting myself through a massive graduate program in photography. In the first
            three months of the pandemic I shot 42 rolls of film: 1,512 photos on film. <br />
            <br />
            In addition to working through my own personal art school I was documenting major
            historical turbulence on a day-to-day basis. I shot NYC during a lockdown, during an
            ongoing pandemic, during protests for George Floyd and vigils for Breonna Taylor. I
            moved beyond New York City, photographing my way through forests, plains, and deserts
            all across the country. I hiked national and state parks, explored forgotten towns, and
            trekked through multiple cities I never thought I’d see. In five weeks I shot 22 rolls
            of film.
            <br />
            <br />
            Traveling alone on the road gives you a lot of time to think, and it was now clear to me
            that I had been feeling restless for a long time. I was hungry for a career that would
            keep me just as engaged as the previous nine months had. And I wanted to combine my
            passion for making and studying art with my desire to build something new and exciting.
            But what could glue those two things together?
            <br />
            <br />
            Enter the internet.
            <br />
            <br />
            One day my uncle suggested I take a look at Harvard’s CS50x, a free and online version
            of David J. Malan’s famous undergrad computer science course. And the rest is history.
            By the end of the second lecture I was hooked. It’s crazy but it really was that simple
            and that fast for me. Design, structure, and problem-solving modules taught me to think
            like an engineer and paved the way for full-stack web development. I completed the
            program and received my certificate. I moved deeper and deeper into web design, climbing
            from server-side templating languages to Single Page Applications to containerized
            microservices and back around to React Server Components, all the while iterating on
            what I had learned before, just as I had done with photography the previous year.
            <br />
            <br />
            At the same time I had graduated to the next level of my photography practice: medium
            format film. 6x7 film has nearly five times the surface area of 35mm, allowing me to
            capture nearly five times more composition without being forced to distort the image
            with a wide angle lens. It’s also a helluva lot sharper and produces exponentially more
            colors than its kid brother can. Combined with everything I was learning in my ad-hoc
            coding bootcamp, it felt as if both my eyes and my brain were expanding.
            <br />
            <br />
            When it became clear that I was going to lasso my different pursuits into one portfolio
            I began brainstorming words and phrases that could encapsulate exactly what it is I have
            to offer. I reflected on my love of learning in and out of the classroom, and of trying
            new things and becoming empowered in pursuing new experiences, as well my boundless love
            for art and visual design. Returning from a trip to the Adirondacks one summer I eagerly
            developed my film and was deeply moved by the ethereal beauty of a waterfall I had
            photographed on Mt. Algonquin. With this feeling lodged in my brain it wasn’t long
            before a new portmanteau was born: Autodidack, the union of a self-motivated learner
            seeking solace, knowledge, and epiphany in nature.
          </p>
          <h2 className="text-3xl font-extrabold">About My Photography</h2>
          <p className="min-h-[200px]">
            When people ask me what kinds of photos I take I always take a pause because the answer
            isn’t so straightforward. I find that I’m always pulling the past behind me as I move
            into new phases of my work. What came before never really wants to let go. If you take a
            quick glance through my instagram you’ll see lots and lots of empty spaces, but scroll
            back farther and you’ll see a few years worth of portraits. Not to mention the
            occasional editorial or street series peppered in. The truth is I’m not closed off to
            any concept, and this, combined with the art-adjacent nature of Medium Format
            photography, has sometimes landed me with the label of Fine Art Photographer. But I
            don’t like that label so much – too stuffy and just as ambiguous as my initial pause.
            <br />
            <br />
            So to narrow it down a bit….
            <br />
            <br />
          </p>
          <ul>
            <li>
              I love celluloid. Especially slide film. I shoot and develop all of the photography
              you see here plus digitize everything with my Epson Perfection V800 Photo scanner.
              Everything is painstakingly organized in Lightroom while color correction and cleaning
              is done in Photoshop.
            </li>
            <li>
              I love nature, hiking, camping, road trips…. but I’m just as much in love with the
              city. I’ve lived in NYC for over a decade and don’t see myself leaving anytime soon. I
              do enjoy taking trips out whenever possible.
            </li>
            <li>
              I’m obsessed with geometric compositions. I often spend upwards of an hour on each
              shot and much of that time is spent adjusting the camera a few micrometers here and
              there to get the absolute perfect angle to my shots.
            </li>
          </ul>
          <br />
          <br />
          <h2 className="text-3xl font-extrabold">Nerd Nook</h2>
          <p className="min-h-[200px]">
            This portfolio is a full-stack web application built with Next.js 13 (React/TypeScript
            under the hood) and a Supabase backend (w/ a PostgreSQL database). Styles and layout are
            handled with Tailwind. I diagrammed the original component flow and designed some UI
            mockups in Figma. And that’s it!
          </p>
        </div>
      </div>
    </div>
  );
}
