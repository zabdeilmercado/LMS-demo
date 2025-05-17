"use client"

import { useEffect } from "react"

export function useTourPosition(targetId: string | null, stepIndex: number, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !targetId) return

    // Find the target element and tooltip
    const targetElement = document.getElementById(targetId) || document.querySelector(`.${targetId}`)
    const highlightElement = document.getElementById(`tour-highlight-${targetId}`)
    const tooltipElement = document.querySelector(".tour-tooltip") as HTMLElement

    if (!targetElement || !tooltipElement || !highlightElement) return

    // Get the position of the target element
    const targetRect = targetElement.getBoundingClientRect()

    // Position the highlight
    const highlightAfter = highlightElement.querySelector("::after") as HTMLElement
    if (highlightAfter) {
      highlightAfter.style.width = `${targetRect.width + 10}px`
      highlightAfter.style.height = `${targetRect.height + 10}px`
      highlightAfter.style.top = `${targetRect.top - 5}px`
      highlightAfter.style.left = `${targetRect.left - 5}px`
    }

    // Calculate tooltip position
    // Default to positioning below the element
    let tooltipTop = targetRect.bottom + 10
    let tooltipLeft = targetRect.left + targetRect.width / 2 - tooltipElement.offsetWidth / 2

    // Adjust if tooltip would go off screen
    if (tooltipTop + tooltipElement.offsetHeight > window.innerHeight) {
      tooltipTop = targetRect.top - tooltipElement.offsetHeight - 10
    }

    if (tooltipLeft < 10) {
      tooltipLeft = 10
    } else if (tooltipLeft + tooltipElement.offsetWidth > window.innerWidth - 10) {
      tooltipLeft = window.innerWidth - tooltipElement.offsetWidth - 10
    }

    // Apply position
    tooltipElement.style.top = `${tooltipTop}px`
    tooltipElement.style.left = `${tooltipLeft}px`
    tooltipElement.style.transform = "none"
  }, [targetId, stepIndex, isActive])
}
