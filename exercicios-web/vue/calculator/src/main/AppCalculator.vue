<template>
    <div class="calculator">
        <AppDisplay :value="displayValue" />
        <AppButton label="AC" triple @onClick="clearMemory" />
        <AppButton label="/" operation  @onClick="setOperation" />
        <AppButton label="7"  @onClick="addDigit" />
        <AppButton label="8" @onClick="addDigit" />
        <AppButton label="9" @onClick="addDigit" />
        <AppButton label="*" operation @onClick="setOperation" />
        <AppButton label="4" @onClick="addDigit" />
        <AppButton label="5" @onClick="addDigit" />
        <AppButton label="6" @onClick="addDigit" />
        <AppButton label="-" operation @onClick="setOperation" />
        <AppButton label="1" @onClick="addDigit" />
        <AppButton label="2" @onClick="addDigit" />
        <AppButton label="3" @onClick="addDigit" />
        <AppButton label="+" operation @onClick="setOperation" />
        <AppButton label="0" double @onClick="addDigit" />
        <AppButton label="." @onClick="addDigit" />
        <AppButton label="=" operation @onClick="setOperation" />
    </div>
</template>

<script>
import AppDisplay from '../components/AppDisplay.vue';
import AppButton from '../components/AppButton.vue';

export default {
    name: 'AppCalculator',
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { AppButton, AppDisplay },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
           if (this.current === 0) {
               this.operation = operation
               this.current = 1
               this.clearDisplay = true
           } else {
               const equals = operation === "="
               const currentOperation = this.operation

               try {
                   this.values[0] = eval(
                       `${this.values[0]} ${currentOperation} ${this.values[1]}`
                   )
               } catch (e) {
                   this.$emit('onError', e)
               }

               this.values[1] = 0

               this.displayValue = this.values[0]
               this.operation = equals ? null : operation
               this.current = equals ? 0 : 1
               this.clearDisplay = !equals
           }
        },
        addDigit(n) {
            if (n === "." && this.displayValue.includes(".")) {
                return
            }

            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false
            this.values[this.current] = displayValue
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr repeat(5, 48px);
}
</style>