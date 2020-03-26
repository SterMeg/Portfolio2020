const Skills = () => (
  // const [skillSelect, setSkillSelect] = useState('frontend')
  <section>
    <label>
      Frontend Skills
      <input
        type="radio"
        name="skills"
        value="frontend"
        checked={skillSelect === "frontend"}
        onChange={e => setSkillSelect(e.target.value)}
      />
    </label>
    <label>
      Backend Skills
      <input
        type="radio"
        name="skills"
        value="backend"
        checked={skillSelect === "backend"}
        onChange={e => setSkillSelect(e.target.value)}
      />
    </label>
    <h2>My Skills</h2>
    <p>Don't see a skill you are looking for? I can learn it! I'm always ready to learn new things, and I've proven that I can quickly and effectively become productive with new tools and languages.</p>
  </section>
)