import ShowCard from '~/components/ShowCard'
import shows from '~/shows.json'

function LearningGoalsDisplay({ focus, onClick, currentPlan }) {
  const filterShows = (show) => {
    return focus.map((f) => f.value).some((f) => show.focus.includes(f))
  }

  return (
    <div className='grid gap-2 mt-4 lg:gap-4 md:grid-cols-2 md:w-[560px]'>
      {focus.length
        ? shows.map((s) => {
            return filterShows(s) ? (
              <ShowCard
                key={s.title}
                show={s}
                action='add'
                onClick={onClick}
                added={currentPlan.includes(s.image)}
              />
            ) : (
              ''
            )
          })
        : ''}
    </div>
  )
}

export default LearningGoalsDisplay
