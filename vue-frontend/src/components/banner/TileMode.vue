<script setup>
    import { useTileModeStore } from '../../stores/tileModeStore';
    const { expanded, toggleMode } = useTileModeStore();

    const toggleModeWithLog = (event) => {
        console.log('Checkbox checked:', event.target.checked);
        toggleMode();
        console.log('TileMode toggled:', expanded);
    };
</script>

<template>
    <div class="tileMode">
        <label class="switch">
          <input
            type="checkbox"
            :checked="expanded"
            @change="toggleModeWithLog"
            class="checkbox"
          />
          <span class="slider"></span>
          <span class="label">{{ expanded ? 'Collapse' : 'Expand' }}</span>
        </label>
    </div>    
</template>
  
<style scoped>
.tileMode {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 10px;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
  }
  
  .switch .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 30px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  .checkbox:checked + .slider {
    background-color: #FF6600;
  }
  
  .checkbox:focus + .slider {
    box-shadow: 0 0 1px #FF6600;
  }
  
  .checkbox:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    color: #4974A3;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .switch:hover .label {
    opacity: 1;
    cursor: pointer; 
  }
  </style>
  