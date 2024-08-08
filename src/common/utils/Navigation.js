export const toggleRotationClass = (linkId, activeCondition) => {
  const link = document.getElementById(linkId);
  if (link) {
    link.classList.toggle('group-hover:-rotate-12', !activeCondition);
    link.classList.toggle('-rotate-12', activeCondition);
  }
};

export const updateLinkClasses = (linkId, pathMatches) => {
  const link = document.getElementById(linkId);
  if (link) {
    link.classList.toggle('text-neutral-900', pathMatches);
    link.classList.toggle('dark:!text-neutral-200', pathMatches);
    link.classList.toggle('bg-neutral-200', pathMatches);
    link.classList.toggle('dark:bg-neutral-800', pathMatches);
    link.classList.toggle('lg:hover:gap-4', !pathMatches);
    link.classList.toggle('lg:gap-4', pathMatches);
    link.classList.toggle('hover:text-neutral-900', !pathMatches);
    link.classList.toggle('hover:dark:text-neutral-300', !pathMatches);
    toggleRotationClass(linkId + '-icon', pathMatches);
  }
};
