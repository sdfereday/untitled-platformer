// Flags returns a new object clone of the trigger back to the requester with a toggle of its previous state
const toggleTrigger = (trigger) => {
    return {
        ...trigger,
        isActive: !trigger.isActive
    }
}

// Or you can do it manually
const setTriggerState = (trigger, state) => {
    return {
        ...trigger,
        isActive: state
    }
}

// Simple utility that'll return true if all triggers are active
const triggerCheck = (triggers) => {
    return triggers.every(x => x.isActive);
}