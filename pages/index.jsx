import BaseLayout from "../components/BaseLayout";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { useUser } from "../context/user";

export default function Home() {
  const { user } = useUser();
  return (
    <BaseLayout>
      <Seo title="Welcome" description="Dartology is a collection of tools to learn more about darts and become more proficient in your game." />

      <Hero heading="Welcome to Dartology!">
        <p>Dartology is a collection of tools to learn more about the game of darts and become more proficient in your skill.</p>
        <p>From novice to league player and drunken monkey to professional, we've got you covered.</p>
      </Hero>

      <div className="container">
        <h2 className="mt-12">Practice Make Perfect</h2>

        <p className="text-sm italic">(well, maybe not perfect, but way better)</p>

        <p>We have a plethora of practice routines to help you achieve your darting goals, even if your goal is as simple as beating your friends in your local pub on a Tuesday night.</p>

        <a href="/routines/" className="mt-4 btn secondary md:inline-flex md:mr-4">
          All Practice Routines
        </a>

        <a href="/api/random-routine" className="mt-4 btn secondary md:inline-flex md:mr-4">
          Random Routine
        </a>

        <a href="/skills/" className="mt-4 btn secondary md:inline-flex md:mr-4">
          Skills
        </a>

        <h2 className="mt-12">Playing the Percentages</h2>

        <p>
          We all have good and bad days in darts, but wouldn't it be nice to increase your chances of winning x01 games on those bad days? Well it's possible if you learn to play the percentages. Using the right checkouts will dramatically increase that chance and make the good days even better.
        </p>

        <a href="/flipout/" className="mt-4 btn secondary md:inline-flex">
          Play Flipout
        </a>

        <h2 className="mt-12">What's My Out?</h2>

        <p>Yea, we hear it all the time too, but we got you covered. Our Checkout Chart shows you the best way to go, based on playing the percentages, when trying to win a game.</p>

        <a href="/checkouts/" className="mt-4 btn secondary md:inline-flex">
          Look up an Out
        </a>

        <h2 className="mt-12">What should I do?</h2>

        <p>Sometimes it hard to know what to do to get to the best check out. Our Setups tool will help you learn what the best thing to do is when you're trying to get to a good out before your opponent does.</p>

        <a href="/setups/" className="mt-4 btn secondary md:inline-flex">
          View Setups
        </a>

        <h2 className="mt-12">What the hell is an 'oche' anyway?</h2>

        <p>
          There's a lot of weird words and phrases you'll hear around the dart board. And by "a lot", we mean a ton (pun definitely intended). Have a look at the{" "}
          <a href="https://en.wikipedia.org/wiki/Glossary_of_darts" target="_blank" rel="noopener nofollow">
            Glossary of darts on Widipedia.
          </a>{" "}
          to have your mind blown. 🤯
        </p>
      </div>
    </BaseLayout>
  );
}
