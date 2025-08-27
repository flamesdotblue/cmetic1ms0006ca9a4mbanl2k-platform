import React from 'react';
import Header from './components/Header';
import StoryCard from './components/StoryCard';
import MarqueeTicker from './components/MarqueeTicker';
import Footer from './components/Footer';

const stories = [
  {
    id: 'glass-coffin',
    title: 'The Crack in the Glass',
    location: 'Volograd Municipal Morgue, 1998',
    excerpt:
      'Witnesses reported a sudden fracture across a sealed glass coffin exactly nine minutes after cardiac arrest. The room temperature dropped four degrees.',
    body:
      `An experimental containment coffin was commissioned for post-mortem observation—a rectangular vault of thick laboratory glass with a vacuum-sealed lid. Two nurses swore they heard a high, hollow sound, like a finger dragged along a crystal rim. At 02:19, a single diagonal fissure bisected the lid from corner to corner. There were no impacts recorded and no defects noted in the intake log. The EKG strip, though flat, showed a sharp, impossible spike timed to the exact second of the fracture. The mortician tried to explain it as thermal stress. The thermograph shows no delta sufficient to account for it.

      The crack, photographed under blue light, revealed micro-abrasions shaped like feathering outward—pressure from within, not without. The attending orderly resigned the following morning and refused to enter the refrigeration corridor again. Half the staff started taping black cloth over the observation windows as if the dead could see through them.
      `,
  },
  {
    id: 'salt-lines',
    title: 'Salt That Wouldn’t Hold',
    location: 'Harbor Hospice, Maine, 2007',
    excerpt:
      'Control experiment: a ring of salt poured around the gurney before time of death. Post-event, the ring showed a discontinuity—a clean corridor through which the grains were displaced outward.',
    body:
      `They weighed the ring before and after. The mass loss was insignificant—mere grams—but the directionality was perfect, a neat parting like the wake behind a skiff. Security footage shows nothing visible crossing the line. The attending physician, who did not authorize spiritual theatrics, wrote only ‘patient expired peacefully’. The night nurse later confessed she smelled brine where there had been none, and something like ozone, as if a storm had passed through a room where the windows could not open.

      This was repeated twice more that season. Three rings, three corridors. Always aligned with the head of the bed, always pointing toward the door.
      `,
  },
  {
    id: 'elevator',
    title: 'The Elevator Refused',
    location: 'St. Daria’s Infirmary, 2014',
    excerpt:
      'At 03:03, a service elevator halted on a non-existent floor and refused commands for 46 seconds. Moments earlier, a patient on Level 3 had been pronounced dead.',
    body:
      `The elevator control logs are precise. They show a full stop between Level 3 and Level 4, at a height that does not correspond to any mechanical landing. The car’s internal load sensor registered a sudden increase of 21.8 kilograms—roughly the weight of a rolled linen cart—though the camera revealed only a single attendant and an empty stretcher. The attendant reported a temperature change and a gentle swaying, as if someone else had stepped in and shifted their weight.

      When the doors finally opened, the hallway lights flickered twice in unison all along the ward. The attendant refused to take that car after dark again. “It didn’t want to open,” she said. “It felt like it was letting something off first.”
      `,
  },
  {
    id: 'mirror-fog',
    title: 'Breath on the Mirror',
    location: 'Basement Lab C, University Annex, 1973',
    excerpt:
      'A double-paned observation mirror fogged from the dead side during a controlled hypoxia experiment. Four letters traced in the mist were readable before the fog dissipated.',
    body:
      `The letters were inverted from the observer’s angle, as if written from within the sealed chamber. They spelled a name not belonging to anyone present, but matching the subject’s estranged sister. No writing instrument was found. The investigators blamed condensation differentials from a faulty vent. The ventilation contractor found no fault.

      The graduate assistant on record quit academia and sent a single envelope to the department chair containing a clipping from a local obituary column. The name matched. The date matched. The handwriting across the envelope matched the traced letters on the mirror as closely as pressure and penmanship can match fog.
      `,
  },
  {
    id: 'radio-hum',
    title: 'The Radio That Learned a Name',
    location: 'Paramedic Unit 12, 1991',
    excerpt:
      'Transit to county hospital. Flatline. The dash radio, not transmitting, emitted a low carrier hum modulating into syllables: the driver’s nickname, twice, in a voice not present in the rig.',
    body:
      `The driver braked at a yellow light. The radio was off—not just idle, off. The voice, recorded on a dictaphone tucked beside the medical bag, is high and breath-thin. The spectrogram shows no carrier frequency like a normal transmission, only a stacked band of harmonics like breath through a reed. The medic in back says the patient’s hand relaxed at exactly that moment. They both swear the gurney wheels squealed once, long, though they were locked.

      They delivered an empty body. The driver kept the dictaphone tape for years and never played it after midnight.
      `,
  },
  {
    id: 'ash-door',
    title: 'Ash on the Doorframe',
    location: 'Rowhouse, Dresden, 1955',
    excerpt:
      'Neighbors found a soot-print above the doorway, five finger-spans long, after a woman died in the front room. The soot trailed up and out, bending into the air like smoke that had handholds.',
    body:
      `No one had burned coal that night. The oven was cold. The doctor said her passing was quiet. Yet the soot print flaked when brushed, revealing the pale wood underneath in the shape of a palm stretched upward. On the street below, pigeons refused the sill for three days, regrouping on the opposite eaves like a congregation that had been asked to step outside.

      The landlord painted over the mark. The shape bled through in humid weather. Tenants began leaving the door ajar.
      `,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      {/* Background aura */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e] via-black to-[#0b0b0e]"/>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(120,0,60,0.15),transparent)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_120%,rgba(40,0,80,0.22),transparent)]"/>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 10 10\'><path d=\'M0 0h10v10H0z\' fill=\'%23000\'/><path d=\'M0 0h10v10H0z\' fill=\'%23fff\' fill-opacity=\'0.03\'/></svg>")'}}/>
      </div>

      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <MarqueeTicker items={[
          'unverified reports',
          'cold spots',
          'hairline fractures',
          'names in the fog',
          'doors that open themselves',
          'salt disturbed',
        ]} />

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {stories.map((s, i) => (
            <StoryCard key={s.id} index={i} title={s.title} location={s.location} excerpt={s.excerpt} body={s.body} />
          ))}
        </section>

        <div className="mt-12 rounded-xl bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 border border-zinc-800 p-6">
          <h2 className="text-lg md:text-xl font-medium tracking-tight text-zinc-200">Editorial Note</h2>
          <p className="mt-2 text-zinc-400 leading-relaxed">
            These accounts are collected as folklore and field notes—unverified, unrepeatable, and told in the half-light where instruments end and rumor begins. Read them as you would any midnight testimony: with care, with skepticism, and with the quiet feeling that the room is not as empty as it seems.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
